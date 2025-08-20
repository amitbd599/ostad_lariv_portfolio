import { useState } from "react";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
    date: "",
    commentCount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog created:", blog);
    // You can add your POST request here
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={blog.title}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Blog Category"
          value={blog.category}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded"
        />
        <textarea
          name="content"
          placeholder="Blog Content"
          value={blog.content}
          onChange={handleChange}
          rows={4}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={blog.image}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded"
        />
        <input
          type="date"
          name="date"
          value={blog.date}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded"
        />
        <input
          type="number"
          name="commentCount"
          placeholder="Comment Count"
          value={blog.commentCount}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
