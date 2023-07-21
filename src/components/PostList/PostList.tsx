import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";
type PostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostList = () => {
  const [posts, setPosts] = useState<PostsType[] | null>(null);
  const [search, setSearch] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  // const [postsInPage] = useState(20);

  const API = "https://jsonplaceholder.typicode.com";

  const getPost = async () => {
    try {
      const result = await axios(`${API}/posts?q=${search}&_page=${page}`);
      setPosts(result.data);

      const pageTotalCount = +result.headers["x-total-count"];
      const totalPage = Math.ceil(pageTotalCount / 10);

      setCurrentPage(totalPage);
    } catch (error) {
      console.error("postlist:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, [search, page]);

  const handleNexPage = () => {
    setPage((nextPage) => nextPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  // const lastPostIndex = currentPage * postsInPage;
  // const firstPostIndex = lastPostIndex - postsInPage;
  // const currentPost = posts?.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <input
        className="searchInp"
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div className="btnContainer">
        <button type="button" disabled={page === 1} onClick={handlePrevPage}>
          Prev
        </button>
        <button
          type="button"
          disabled={page === currentPage}
          onClick={handleNexPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
