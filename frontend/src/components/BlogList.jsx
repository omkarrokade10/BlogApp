import React from 'react';

function BlogList({ blogs, onDelete }) {
  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <button onClick={() => onDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
