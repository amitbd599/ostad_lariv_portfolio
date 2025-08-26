import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import RouteScrollToTop from "./layout/RouteScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateBlog from "./pages/dashboard/blog/CreateBlog";
import GetAllBlog from "./pages/dashboard/blog/GetAllBlog";
import UpdateBlog from "./pages/dashboard/blog/UpdateBlog";
import CreateExperience from "./pages/dashboard/experience/CreateExperience";
import GetAllExperience from "./pages/dashboard/experience/GetAllExperience";
import CreateEducation from "./pages/dashboard/education/CreateEducation";
import GetAllEducation from "./pages/dashboard/education/GetAllEducation";
import UpdateEducation from "./pages/dashboard/education/UpdateEducation";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />

        {/* dashboard all page */}
        <Route exact path='/dashboard' element={<Dashboard />} />

        {/* Blog */}
        <Route exact path='/create-blog' element={<CreateBlog />} />
        <Route exact path='/get-all-blog' element={<GetAllBlog />} />
        <Route exact path='/update-single-blog' element={<UpdateBlog />} />

        {/* Experience */}
        <Route exact path='/create-experience' element={<CreateExperience />} />
        <Route
          exact
          path='/get-all-experience'
          element={<GetAllExperience />}
        />
        <Route
          exact
          path='/update-single-experience'
          element={<UpdateBlog />}
        />

        {/* Education */}
        <Route exact path='/create-education' element={<CreateEducation />} />
        <Route exact path='/get-all-education' element={<GetAllEducation />} />
        <Route
          exact
          path='/update-single-education'
          element={<UpdateEducation />}
        />

        {/* Fallback Route */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
