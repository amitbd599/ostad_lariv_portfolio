import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateTestimonial = () => {
  const { id } = useParams();

  const [testimonial, setTestimonial] = useState({
    feedback: "",
    name: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    // Simulated fetch
    setTestimonial({
      feedback:
        "I recently had the pleasure of using LoraXD for my business, and I must say it has exceeded my expectations in every way possible.",
      name: "Larry N. Alexandre",
      address: "565 Snider Street Denver, CO 80202",
      image: "assets/images/user/user-1.png",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating testimonial:", testimonial);
    // API update call here
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Update Testimonial</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <textarea
          name="feedback"
          placeholder="Write the feedback..."
          value={testimonial.feedback}
          onChange={handleChange}
          rows={4}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={testimonial.name}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={testimonial.address}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={testimonial.image}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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

export default UpdateTestimonial;
