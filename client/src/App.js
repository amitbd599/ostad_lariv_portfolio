import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./layout/RouteScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";
import Login from "./pages/Login";

import AOS from "aos";
import "aos/dist/aos.css";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Settings from "./pages/dashboard/Settings";
import CreateExperience from "./pages/dashboard/experience/CreateExperience";
import UpdateExperience from "./pages/dashboard/experience/UpdateExperience";
import CreateEducation from "./pages/dashboard/education/CreateEducation";
import UpdateEducation from "./pages/dashboard/education/UpdateEducation";
import CreateSkill from "./pages/dashboard/skill/CreateSkill";
import UpdateSkill from "./pages/dashboard/skill/UpdateSkill";
import CreatePortfolio from "./pages/dashboard/portfolio/CreatePortfolio";
import UpdatePortfolio from "./pages/dashboard/portfolio/UpdatePortfolio";
import CreateService from "./pages/service/CreateService";
import UpdateService from "./pages/service/UpdateService";
import CreateTestimonial from "./pages/testimonial/CreateTestimonial";
import UpdateTestimonial from "./pages/testimonial/UpdateTestimonial";
import CreateBlog from "./pages/dashboard/blog/CreateBlog";
import UpdateBlog from "./pages/dashboard/blog/UpdateBlog";
import ShowContacts from "./pages/dashboard/contact/ShowContacts";
import ContactDetails from "./pages/dashboard/contact/ContactDetails";



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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />


        {/* Dashboard Layout with Nested Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/dashboard/create-experience" element={<CreateExperience />} />
          <Route path="/dashboard/update-experience/:id" element={<UpdateExperience />} />
          <Route path="/dashboard/create-education" element={<CreateEducation />} />
          <Route path="/dashboard/update-education/:id" element={<UpdateEducation />} />
          <Route path="/dashboard/create-skill" element={<CreateSkill />} />
          <Route path="/dashboard/update-skill/:id" element={<UpdateSkill />} />
          <Route path="/dashboard/create-portfolio" element={<CreatePortfolio />} />
          <Route path="/dashboard/update-portfolio/:id" element={<UpdatePortfolio />} />
          <Route path="/dashboard/create-service" element={<CreateService />} />
          <Route path="/dashboard/update-service/:id" element={<UpdateService />} />
          <Route path="/dashboard/create-testimonial" element={<CreateTestimonial />} />
          <Route path="/dashboard/update-testimonial/:id" element={<UpdateTestimonial />} />
          <Route path="/dashboard/create-blog" element={<CreateBlog />} />
          <Route path="/dashboard/update-blog/:id" element={<UpdateBlog />} />
          <Route path="/dashboard/contacts" element={<ShowContacts />} />
          <Route path="/dashboard/contact-details/:id" element={<ContactDetails />} />

        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
