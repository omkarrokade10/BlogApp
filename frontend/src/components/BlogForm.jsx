import React, { useState } from 'react';

function BlogForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Blog</button>
    </form>
  );
}

export default BlogForm;
