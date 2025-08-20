import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Dummy fetch by id (replace with real fetch later)
    const allContacts = [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        website: "https://johndoe.com",
        message: "I'm interested in your services!",
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        website: "https://janesmith.dev",
        message: "Let's collaborate!",
      },
    ];
    const found = allContacts.find((c) => c.id === id);
    setContact(found);
  }, [id]);

  if (!contact) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 rounded bg-theme px-4 py-2 text-black transition hover:bg-theme/80"
      >
        ← Back
      </button>
      <h2 className="mb-6 text-2xl font-bold">Contact Details</h2>
      <div className="space-y-4 rounded-xl bg-gray-900 p-6">
        <p>
          <span className="font-bold">Name:</span> {contact.name}
        </p>
        <p>
          <span className="font-bold">Email:</span> {contact.email}
        </p>
        <p>
          <span className="font-bold">Website:</span>{" "}
          <a
            className="text-theme underline"
            href={contact.website}
            target="_blank"
            rel="noreferrer"
          >
            {contact.website}
          </a>
        </p>
        <p>
          <span className="font-bold">Message:</span> {contact.message}
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
