// src/pages/UpdateExperience.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateExperience = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState({
    year: "",
    title: "",
    company: "",
    description: "",
  });

  useEffect(() => {
    // Simulate fetching experience by ID
    setExperience({
      year: "2016 - 2020",
      title: "Web Application Manager",
      company: "Ultra Luca Company",
      description:
        "Since starting my excursion as an independent creator almost quite a while back, I've accomplished remote work for organizations...",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated experience:", experience);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Update Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="year"
          placeholder="2016 - 2020"
          value={experience.year}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="title"
          placeholder="Web Application Manager"
          value={experience.title}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="company"
          placeholder="Ultra Luca Company"
          value={experience.company}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          name="description"
          placeholder="Description..."
          value={experience.description}
          onChange={handleChange}
          rows={5}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>

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

export default UpdateExperience;
