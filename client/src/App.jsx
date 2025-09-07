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
import CreateAdvantages from "./pages/dashboard/advantages/CreateAdvantages";
import GetAllAdvantages from "./pages/dashboard/advantages/GetAllAdvantages";
import UpdateAdvantages from "./pages/dashboard/advantages/UpdateAdvantages";
import CreatePortfolio from "./pages/dashboard/portfolio/CreatePortfolio";
import GetAllPortfolio from "./pages/dashboard/portfolio/GetAllPortfolio";
import UpdatePortfolio from "./pages/dashboard/portfolio/UpdatePortfolio";
import CreateService from "./pages/dashboard/service/CreateService";
import GetAllService from "./pages/dashboard/service/GetAllService";
import UpdateService from "./pages/dashboard/service/UpdateService";
import CreateTestimonial from "./pages/dashboard/testimonial/CreateTestimonial";
import GetAllTestimonial from "./pages/dashboard/testimonial/GetAllTestimonial";
import UpdateTestimonial from "./pages/dashboard/testimonial/UpdateTestimonial";
import GetAllComment from "./pages/dashboard/comment/GetAllComment";
import UploadFile from "./pages/dashboard/upload/UploadFile";
import GetAllUploadFile from "./pages/dashboard/upload/GetAllUploadFile";
import UserUpdate from "./pages/dashboard/user/UserUpdate";
import PrivateRoute from "./components/PrivateRoute";
import UpdateExperience from "./pages/dashboard/experience/UpdateExperience";

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
        <Route
          exact
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

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
          path='/update-single-experience/:id'
          element={<UpdateExperience />}
        />

        {/* Education */}
        <Route exact path='/create-education' element={<CreateEducation />} />
        <Route exact path='/get-all-education' element={<GetAllEducation />} />
        <Route
          exact
          path='/update-single-education/:id'
          element={<UpdateEducation />}
        />

        {/* Advantages */}
        <Route exact path='/create-advantages' element={<CreateAdvantages />} />
        <Route
          exact
          path='/get-all-advantages'
          element={<GetAllAdvantages />}
        />
        <Route
          exact
          path='/update-single-advantages/:id'
          element={<UpdateAdvantages />}
        />

        {/* Portfolio */}
        <Route exact path='/create-portfolio' element={<CreatePortfolio />} />
        <Route exact path='/get-all-portfolio' element={<GetAllPortfolio />} />
        <Route
          exact
          path='/update-single-portfolio/:id'
          element={<UpdatePortfolio />}
        />

        {/* Service */}
        <Route exact path='/create-service' element={<CreateService />} />
        <Route exact path='/get-all-service' element={<GetAllService />} />
        <Route
          exact
          path='/update-single-service'
          element={<UpdateService />}
        />

        {/* Testimonial */}
        <Route
          exact
          path='/create-testimonial'
          element={<CreateTestimonial />}
        />
        <Route
          exact
          path='/get-all-testimonial'
          element={<GetAllTestimonial />}
        />
        <Route
          exact
          path='/update-single-testimonial'
          element={<UpdateTestimonial />}
        />

        {/* Comment */}
        <Route exact path='/get-all-comment' element={<GetAllComment />} />

        {/* Upload File */}
        <Route exact path='/upload-file' element={<UploadFile />} />
        <Route exact path='/get-all-file' element={<GetAllUploadFile />} />
        <Route
          exact
          path='/user-update'
          element={
            <PrivateRoute>
              <UserUpdate />
            </PrivateRoute>
          }
        />

        {/* Fallback Route */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
