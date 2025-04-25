// App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await axios.get('https://blogapp-backend-w6ns.onrender.com/api/blogs');
    setBlogs(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://blogapp-backend-w6ns.onrender.com/api/blogs', formData);
    setFormData({ title: '', content: '' });
    fetchBlogs();
  };

  const deleteBlog = async (id) => {
    await axios.delete(`https://blogapp-backend-w6ns.onrender.com/api/blogs/${id}`);
    fetchBlogs();
  };

  return (
    <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm`}> 
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">BlogApp By omkar Rokade</a>
          <button className="btn btn-outline-secondary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>

      <div className="container py-5">
        <h1 className="text-center text-primary mb-5">Simple Blog App</h1>

        <form onSubmit={handleSubmit} className={`card shadow p-4 mb-5 ${darkMode ? 'bg-secondary text-white' : ''}`}>
          <h3 className="mb-3">Create New Blog</h3>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Content"
              className="form-control"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
            ></textarea>
          </div>
          <button className="btn btn-primary">Post Blog</button>
        </form>

        <div className="row">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-md-6 mb-4">
              <div className={`card h-100 shadow-sm ${darkMode ? 'bg-dark text-white border-light' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content}</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className={`text-center py-3 ${darkMode ? 'bg-dark text-light' : 'bg-white text-muted'} border-top`}>
        &copy; {new Date().getFullYear()} BlogApp. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
