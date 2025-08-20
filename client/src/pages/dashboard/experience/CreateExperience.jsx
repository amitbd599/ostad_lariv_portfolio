// src/pages/CreateExperience.jsx
import { useState } from "react";

const CreateExperience = () => {
  const [experience, setExperience] = useState({
    year: "",
    title: "",
    company: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating experience:", experience);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="year"
          placeholder="2021 - Present"
          value={experience.year}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="title"
          placeholder="Framer Designer & Developer"
          value={experience.title}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="company"
          placeholder="Liza Yoolo ITC Company"
          value={experience.company}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Description..."
          value={experience.description}
          onChange={handleChange}
          rows={5}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

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

export default CreateExperience;
