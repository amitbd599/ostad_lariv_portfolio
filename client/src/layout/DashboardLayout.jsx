import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-700 transition duration-200";
  const activeClass = "bg-gray-700";

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-30 h-screen w-64 transform overflow-y-auto bg-gray-900 p-5 shadow-md transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <h2 className="mb-4 hidden text-2xl font-bold lg:block">Dashboard</h2>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Dashboard Home
          </NavLink>

          {/* Experience */}
          <Section title="Experience">
            <NavLinkItem
              to="/dashboard/create-experience"
              label="Create Experience"
            />
            <NavLinkItem
              to="/dashboard/update-experience/1"
              label="Update Experience"
            />
          </Section>

          {/* Education */}
          <Section title="Education">
            <NavLinkItem
              to="/dashboard/create-education"
              label="Create Education"
            />
            <NavLinkItem
              to="/dashboard/update-education/1"
              label="Update Education"
            />
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <NavLinkItem to="/dashboard/create-skill" label="Create Skill" />
            <NavLinkItem to="/dashboard/update-skill/1" label="Update Skill" />
          </Section>

          {/* Portfolio */}
          <Section title="Portfolio">
            <NavLinkItem
              to="/dashboard/create-portfolio"
              label="Create Portfolio"
            />
            <NavLinkItem
              to="/dashboard/update-portfolio/1"
              label="Update Portfolio"
            />
          </Section>

          {/* Services */}
          <Section title="Services">
            <NavLinkItem
              to="/dashboard/create-service"
              label="Create Service"
            />
            <NavLinkItem
              to="/dashboard/update-service/1"
              label="Update Service"
            />
          </Section>

          {/* Testimonials */}
          <Section title="Testimonials">
            <NavLinkItem
              to="/dashboard/create-testimonial"
              label="Create Testimonial"
            />
            <NavLinkItem
              to="/dashboard/update-testimonial/1"
              label="Update Testimonial"
            />
          </Section>

          {/* Blogs */}
          <Section title="Blogs">
            <NavLinkItem to="/dashboard/create-blog" label="Create Blog" />
            <NavLinkItem to="/dashboard/update-blog/1" label="Update Blog" />
          </Section>

          {/* Contacts */}
          <Section title="Contacts">
            <NavLinkItem to="/dashboard/contacts" label="All Contacts" />
          </Section>
        </nav>

        {/* Back to Home */}
        <div className="pt-8">
          <Link
            to="/"
            className="block rounded bg-blue-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-8 top-8 z-40 rounded-md border border-white bg-gray-800 p-1 text-white lg:hidden"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Main content */}
      <main className="min-h-screen flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

// Reusable Components
const Section = ({ title, children }) => (
  <div>
    <p className="mb-2 mt-4 text-sm uppercase text-gray-400">{title}</p>
    {children}
  </div>
);

const NavLinkItem = ({ to, label }) => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-700 transition duration-200";
  const activeClass = "bg-gray-700";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${linkClass} ${isActive ? activeClass : ""}`
      }
    >
      {label}
    </NavLink>
  );
};
