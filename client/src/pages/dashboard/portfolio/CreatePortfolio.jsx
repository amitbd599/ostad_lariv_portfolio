
import { useState } from "react";

const CreatePortfolio = () => {
  const [portfolio, setPortfolio] = useState({
    category: "",
    title: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating portfolio:", portfolio);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create Portfolio Item</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="category"
          placeholder="e.g. Mobile Application"
          value={portfolio.category}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="title"
          placeholder="e.g. Minto - AI Resume Builder"
          value={portfolio.title}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL or Path"
          value={portfolio.image}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default CreatePortfolio;
