import React, { useState } from "react";
import { blogAPI } from "../../api";
import { useNavigate } from "react-router-dom";

const BulkBlogAdmin = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([
    { title: "", description: "", image: null, imagePreview: null }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addBlog = () => {
    setBlogs([
      ...blogs,
      { title: "", description: "", image: null, imagePreview: null }
    ]);
  };

  const removeBlog = (index) => {
    const newBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(newBlogs);
  };

  const handleBlogChange = (index, field, value) => {
    const newBlogs = [...blogs];
    newBlogs[index][field] = value;
    setBlogs(newBlogs);
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newBlogs = [...blogs];
      newBlogs[index].image = file;
      newBlogs[index].imagePreview = URL.createObjectURL(file);
      setBlogs(newBlogs);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate at least one blog has title and description
    const validBlogs = blogs.filter(b => b.title.trim() && b.description.trim());
    
    if (validBlogs.length === 0) {
      setError("Please add at least one blog with title and description");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      
      // Prepare blogs data without images
      const blogsData = validBlogs.map((blog, index) => ({
        title: blog.title,
        description: blog.description,
        imageIndex: blog.image ? index : -1
      }));
      
      formData.append("blogs", JSON.stringify(blogsData));
      
      // Append images
      validBlogs.forEach((blog, index) => {
        if (blog.image) {
          formData.append(index.toString(), blog.image);
        }
      });

      const response = await blogAPI.bulkCreate(formData);
      
      setSuccess(response.data.message || `Successfully created ${response.data.blogs.length} blogs!`);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setBlogs([{ title: "", description: "", image: null, imagePreview: null }]);
        setSuccess("");
      }, 3000);
      
    } catch (error) {
      console.error("Error creating blogs:", error);
      setError(error.response?.data?.message || "Failed to create blogs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Bulk Blog Upload</h1>
        <button
          onClick={() => navigate("/admin/blogs")}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          ← Back to Single Upload
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow relative">
            {blogs.length > 1 && (
              <button
                type="button"
                onClick={() => removeBlog(index)}
                className="absolute top-4 right-4 text-red-600 hover:text-red-800 font-bold text-xl"
              >
                ×
              </button>
            )}
            
            <h3 className="text-lg font-semibold mb-4">Blog #{index + 1}</h3>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Title *</label>
              <input
                type="text"
                placeholder="Enter blog title"
                className="border p-3 w-full mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={blog.title}
                onChange={(e) => handleBlogChange(index, "title", e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Description *</label>
              <textarea
                placeholder="Enter blog description"
                className="border p-3 w-full mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                value={blog.description}
                onChange={(e) => handleBlogChange(index, "description", e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Blog Image (Optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(index, e)}
                className="border p-2 w-full rounded"
              />
              
              {blog.imagePreview && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                  <img 
                    src={blog.imagePreview} 
                    alt="Preview" 
                    className="h-32 w-32 object-cover rounded border"
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="flex gap-4">
          <button
            type="button"
            onClick={addBlog}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-medium"
          >
            + Add Another Blog
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:bg-gray-400 font-medium flex-1"
            disabled={loading}
          >
            {loading ? "Creating Blogs..." : `Create ${blogs.length} Blog${blogs.length > 1 ? 's' : ''}`}
          </button>
        </div>
      </form>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">📋 Bulk Upload Tips:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Add multiple blogs at once using the form above</li>
          <li>Each blog can have its own image</li>
          <li>Title and description are required for each blog</li>
          <li>Images are optional for each blog</li>
          <li>Remove individual blogs using the × button</li>
        </ul>
      </div>
    </div>
  );
};

export default BulkBlogAdmin;