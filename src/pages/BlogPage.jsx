import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const posts = useSelector((state) => state.blogPage.posts);

  return (
    <div>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>;
          </li>
        );
      })}
    </div>
  );
};

export default BlogPage;
