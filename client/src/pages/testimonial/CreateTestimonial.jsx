import { useState } from "react";

const CreateTestimonial = () => {
  const [testimonial, setTestimonial] = useState({
    feedback: "",
    name: "",
    address: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted testimonial:", testimonial);
    // API call here
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create Testimonial</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <textarea
          name="feedback"
          placeholder="Write the feedback..."
          value={testimonial.feedback}
          onChange={handleChange}
          rows={4}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="name"
          placeholder="Name (e.g. Larry N. Alexandre)"
          value={testimonial.name}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="address"
          placeholder="Address (e.g. 565 Snider Street Denver, CO 80202)"
          value={testimonial.address}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL (e.g. assets/images/user/user-1.png)"
          value={testimonial.image}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default CreateTestimonial;
