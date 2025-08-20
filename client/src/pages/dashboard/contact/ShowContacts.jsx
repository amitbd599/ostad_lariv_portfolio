import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Dummy data (replace with fetch later)
    setContacts([
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
    ]);
  }, []);

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6">All Contacts</h2>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl bg-gray-900">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left bg-gray-800 text-theme">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Website</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-t border-gray-700">
                <td className="p-4">{contact.name}</td>
                <td className="p-4">{contact.email}</td>
                <td className="p-4">{contact.website}</td>
                <td className="p-4">
                  <Link
                    to={`/dashboard/contact-details/${contact.id}`}
                    className="bg-theme text-black px-4 py-2 rounded hover:bg-theme/80 transition"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-4 md:hidden">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="rounded-xl bg-gray-900 p-4 shadow-md border border-gray-800"
          >
            <p>
              <span className="font-bold text-theme">Name:</span> {contact.name}
            </p>
            <p>
              <span className="font-bold text-theme">Email:</span>{" "}
              {contact.email}
            </p>
            <p>
              <span className="font-bold text-theme">Website:</span>{" "}
              <a
                href={contact.website}
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400"
              >
                {contact.website}
              </a>
            </p>
            <Link
              to={`/dashboard/contact-details/${contact.id}`}
              className="inline-block mt-4 bg-theme text-black px-4 py-2 rounded hover:bg-theme/80 transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowContacts;
