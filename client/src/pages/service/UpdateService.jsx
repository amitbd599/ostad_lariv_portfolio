import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaBlackberry, FaCode, FaChartLine, FaPaintBrush } from "react-icons/fa";

// Icon list
const iconOptions = {
  FaBlackberry: <FaBlackberry />,
  FaCode: <FaCode />,
  FaChartLine: <FaChartLine />,
  FaPaintBrush: <FaPaintBrush />,
};

const UpdateService = () => {
  const { id } = useParams();

  const [service, setService] = useState({
    icon: "FaBlackberry",
    title: "",
    description: "",
  });

  useEffect(() => {
    // Dummy fetch for demo
    setService({
      icon: "FaBlackberry",
      title: "Good Business Strategy",
      description:
        "Counseled for new companies, and teamed up with capable individuals to make computerized items for both business and purchaser use.",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating service:", service);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Update Service</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Icon Picker */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Choose an Icon
          </label>
          <select
            name="icon"
            value={service.icon}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {Object.keys(iconOptions).map((iconKey) => (
              <option key={iconKey} value={iconKey}>
                {iconKey}
              </option>
            ))}
          </select>
          <div className="mt-2 text-3xl text-theme">
            {iconOptions[service.icon]}
          </div>
        </div>

        {/* Title Input */}
        <input
          type="text"
          name="title"
          placeholder="Service title"
          value={service.title}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Service description"
          value={service.description}
          onChange={handleChange}
          rows={4}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Submit Button */}
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

export default UpdateService;
