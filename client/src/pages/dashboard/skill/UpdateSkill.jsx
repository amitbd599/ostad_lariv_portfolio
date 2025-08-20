
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateSkill = () => {
  const { id } = useParams();

  const [education, setEducation] = useState({
    year: "",
    degree: "",
    institution: "",
  });

  useEffect(() => {
    // Simulated fetch for demo
    setEducation({
      year: "2016 - 2020",
      degree: "BBA",
      institution: "University of Dhaka",
      description:
        "Since starting my excursion as an independent creator almost quite a while back, I've accomplished remote work for organizations...",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating education:", education);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Update Skill</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={education.year}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={education.degree}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={education.institution}
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

export default UpdateSkill;
