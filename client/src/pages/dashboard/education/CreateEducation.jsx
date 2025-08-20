
import { useState } from "react";

const CreateEducation = () => {
  const [education, setEducation] = useState({
    year: "",
    degree: "",
    institution: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating education:", education);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create Education</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="year"
          placeholder="2021 - Present"
          value={education.year}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="degree"
          placeholder="MBA"
          value={education.degree}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="institution"
          placeholder="University of Dhaka"
          value={education.institution}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Description..."
          value={education.description}
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

export default CreateEducation;
