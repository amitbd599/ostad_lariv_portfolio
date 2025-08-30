import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import { FcMenu } from "react-icons/fc";
import { RiCloseFill } from "react-icons/ri";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-700 transition duration-200";
  const activeClass = "bg-gray-700";

  return (
    <div className='flex min-h-screen bg-black text-white'>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-30 h-screen w-64 transform overflow-y-auto bg-gray-900 p-5 shadow-md transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='mb-6 flex items-center justify-between lg:hidden'>
          <h2 className='text-xl font-bold'>Dashboard</h2>
          <button onClick={() => setIsOpen(false)} className='text-white'>
            <RiCloseFill />
          </button>
        </div>

        <h2 className='mb-4 hidden text-2xl font-bold lg:block'>Dashboard</h2>

        <nav className='space-y-2'>
          <ul>
            <li>
              <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Dashboard Home
              </NavLink>
              <hr className='mt-4' />
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Blog</h3>
              <NavLink
                to='/create-blog'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Create-blog
              </NavLink>
              <hr className='my-2' />
              <NavLink
                to='/get-all-blog'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-blog
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Experience</h3>
              <NavLink
                to='/create-experience'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Create-experience
              </NavLink>
              <hr className='my-2' />
              <NavLink
                to='/get-all-experience'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-experience
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Education</h3>
              <NavLink
                to='/create-education'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Create-education
              </NavLink>
              <hr className='my-2' />
              <NavLink
                to='/get-all-education'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-education
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Advantages</h3>
              <NavLink
                to='/create-advantages'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Create-advantages
              </NavLink>
              <hr className='my-2' />
              <NavLink
                to='/get-all-advantages'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-advantages
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Portfolio</h3>
              <NavLink
                to='/create-portfolio'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Create-portfolio
              </NavLink>
              <hr className='my-2' />
              <NavLink
                to='/get-all-portfolio'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-portfolio
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Service</h3>
              <NavLink
                to='/create-service'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Create-service
              </NavLink>
              <hr className='my-2' />
              <NavLink
                to='/get-all-service'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-service
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Testimonial</h3>
              <NavLink
                to='/create-testimonial'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Create-testimonial
              </NavLink>
              <hr className='my-2' />
              <NavLink
                to='/get-all-testimonial'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-testimonial
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Comment</h3>

              <hr className='my-2' />
              <NavLink
                to='/get-all-comment'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-comment
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>File</h3>
              <NavLink
                to='/upload-file'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Upload-file
              </NavLink>
              <hr className='my-2' />
              <NavLink
                to='/get-all-file'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Get-all-File
              </NavLink>
            </li>
            <li className='my-3'>
              <h3 className='text-[18px] font-medium mb-1'>Profile</h3>
              <NavLink
                to='/user-update'
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Profile Update
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Back to Home */}
        <div className='pt-8'>
          <Link
            to='/'
            className='block rounded bg-blue-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-blue-700'
          >
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='absolute right-8 top-8 z-40 rounded-md border border-white bg-gray-800 p-1 text-white lg:hidden'
      >
        {isOpen ? <RiCloseFill /> : <FcMenu />}
      </button>

      {/* Main content */}
      <main className='min-h-screen flex-1 p-6'>
        <div className=' block w-full bg-[#111827] py-4 rounded-lg'>
          <div className='flex justify-end items-center'>
            <button className='btn'>Logout</button>
          </div>
        </div>
        <div className='pt-[50px]'>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
