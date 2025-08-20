// src/pages/UpdatePortfolio.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdatePortfolio = () => {
  const { id } = useParams();

  const [portfolio, setPortfolio] = useState({
    category: "",
    title: "",
    image: "",
  });

  useEffect(() => {
    // Dummy prefill for demonstration
    setPortfolio({
      category: "Mobile Application",
      title: "Minto - Ai Resume Builder Case Study- UI/UX Design",
      image: "assets/images/projects/project-1.png",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating portfolio:", portfolio);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Update Portfolio Item</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="category"
          placeholder="e.g. Mobile Application"
          value={portfolio.category}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="title"
          placeholder="e.g. Minto - AI Resume Builder"
          value={portfolio.title}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL or Path"
          value={portfolio.image}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded text-white font-medium"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePortfolio;
