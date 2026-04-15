import React, { useEffect, useState } from "react";
import { blogAPI } from "../api";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // BASE URL SAFE FIX (UNCHANGED)
  const BASE_URL =
    import.meta.env.VITE_API_URL?.replace("/api", "") ||
    "https://jadhavar.onrender.com";

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const res = await blogAPI.getAll();
      setBlogs(res.data);
    } catch (error) {
      console.error("Blog load error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium">
        ⏳ Loading blogs...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 mt-24">

      {/* PAGE TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        Our Blogs
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No blogs found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {blogs.map((b) => (
            <div
              key={b._id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition-all bg-white flex flex-col"
            >
              {/* IMAGE */}
              {b.image ? (
                <img
                  src={`${BASE_URL}${b.image}`}
                  alt={b.title}
                  className="w-full h-44 sm:h-48 md:h-52 object-cover"
                />
              ) : (
                <div className="w-full h-44 sm:h-48 md:h-52 bg-gray-200 flex items-center justify-center">
                  📷
                </div>
              )}

              {/* CONTENT */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">

                <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 line-clamp-2">
                  {b.title}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-3 flex-grow">
                  {b.description}
                </p>

                <div className="text-xs sm:text-sm text-gray-500 mb-4">
                  {new Date(b.createdAt).toLocaleDateString()}
                </div>

                {/* READ MORE */}
                <button
                  onClick={() => navigate(`/blog/${b._id}`, { state: b })}
                  className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition text-sm sm:text-base"
                >
                  Read More →
                </button>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Blog;
