import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogAPI } from "../../api";

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: null, imagePreview: null });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedBlogs, setSelectedBlogs] = useState([]);
  const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = useState(false);

  useEffect(() => { fetchBlogs(); }, []);

  const fetchBlogs = async () => {
    const res = await blogAPI.getAll();
    setBlogs(res.data);
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) setForm({ ...form, image: file, imagePreview: URL.createObjectURL(file) });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("description", form.description);
    if (form.image) fd.append("image", form.image);

    editId ? await blogAPI.update(editId, fd) : await blogAPI.create(fd);

    setForm({ title: "", description: "", image: null, imagePreview: null });
    setEditId(null);
    fetchBlogs();
    setLoading(false);
  };

  const editBlog = b => {
    setForm({ title: b.title, description: b.description, image: null, imagePreview: null });
    setEditId(b._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteBlog = async id => {
    if (window.confirm("Delete this blog?")) {
      await blogAPI.delete(id);
      fetchBlogs();
    }
  };

  const getImageUrl = img =>
    img ? `${import.meta.env.VITE_API_URL.replace("/api", "")}${img}` : null;

  return (
    <div className="min-h-screen bg-gray-50 mt-20 sm:mt-24">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Blog Admin</h1>

          <button
            onClick={() => navigate("/admin/blogs/bulk")}
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            📦 Bulk Upload
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow mb-10">
          <input
            className="border p-2 w-full mb-3 rounded"
            placeholder="Title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required
          />

          <textarea
            className="border p-2 w-full mb-3 rounded"
            rows="4"
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            required
          />

          <input type="file" onChange={handleImageChange} className="mb-4" />

          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            {editId ? "Update" : "Create"}
          </button>
        </form>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {blogs.map(b => (
            <div key={b._id} className="bg-white rounded-xl shadow overflow-hidden">

              {b.image && (
                <img
                  src={getImageUrl(b.image)}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-4">
                <h3 className="font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{b.description}</p>

                <div className="flex gap-3">
                  <button onClick={() => editBlog(b)} className="text-blue-600">Edit</button>
                  <button onClick={() => deleteBlog(b._id)} className="text-red-600">Delete</button>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default BlogAdmin;
