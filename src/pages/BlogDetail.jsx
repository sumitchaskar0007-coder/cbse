import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const blog = state;

  if (!blog) return <div>No Blog Found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 mt-24">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-teal-500 underline"
      >
        ← Back
      </button>

      <img
        src={`https://api.jadhavarinternationalschool.com${blog.image}`}
        className="w-full h-72 object-cover rounded mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>

      <p className="text-gray-500 mb-4">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        {blog.description}
      </p>

    </div>
  );
};

export default BlogDetail;
