import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      
      {/* NAVBAR */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* DASHBOARD CONTENT */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* GALLERY */}
            <Link to="/admin/gallery" className="bg-white shadow rounded-lg hover:shadow-lg transition">
              <div className="p-6 flex items-center">
                <div className="bg-blue-500 rounded-md p-3 text-white">🖼️</div>
                <div className="ml-5">
                  <p className="text-sm text-gray-500">Gallery Management</p>
                  <p className="text-lg font-medium">Manage Images</p>
                </div>
              </div>
            </Link>

            {/* ANNOUNCEMENTS */}
            <Link to="/admin/announcements" className="bg-white shadow rounded-lg hover:shadow-lg transition">
              <div className="p-6 flex items-center">
                <div className="bg-green-500 rounded-md p-3 text-white">📢</div>
                <div className="ml-5">
                  <p className="text-sm text-gray-500">Announcements</p>
                  <p className="text-lg font-medium">Manage Announcements</p>
                </div>
              </div>
            </Link>

            {/* CAREERS */}
            <Link to="/admin/careers" className="bg-white shadow rounded-lg hover:shadow-lg transition">
              <div className="p-6 flex items-center">
                <div className="bg-purple-500 rounded-md p-3 text-white">💼</div>
                <div className="ml-5">
                  <p className="text-sm text-gray-500">Careers</p>
                  <p className="text-lg font-medium">Manage Job Postings</p>
                </div>
              </div>
            </Link>

            {/* BLOG ADMIN (NEW) */}
            <Link to="/admin/blogs" className="bg-white shadow rounded-lg hover:shadow-lg transition">
              <div className="p-6 flex items-center">
                <div className="bg-orange-500 rounded-md p-3 text-white">📝</div>
                <div className="ml-5">
                  <p className="text-sm text-gray-500">Blog System</p>
                  <p className="text-lg font-medium">Manage Blogs</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
