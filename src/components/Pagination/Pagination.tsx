import React, { FC } from "react";

type pagType = {
  postsInPage: number;
  totalPosts: number;
};

const Pagination: FC<pagType> = ({ postsInPage, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsInPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
