import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const TestimonialStore = create((set) => ({
  //! create-testimonial api -- done
  createTestimonialLoading: false,
  createTestimonialRequest: async (reqBody) => {
    try {
      set({ createTestimonialLoading: true });
      let res = await axios.post(baseURL + "/create-testimonial", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ createTestimonialLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ createTestimonialLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ createTestimonialLoading: false });
      return false;
    }
  },

  //! all-testimonial api -- done
  allTestimonialData: null,
  allTestimonialRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/all-testimonial", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allTestimonialData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-testimonial api
  deleteTestimonialRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-testimonial/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        return true;
      } else {
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! single-testimonial -- done
  singleTestimonialData: null,
  singleTestimonialRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/single-testimonial/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ singleTestimonialData: res?.data?.data });
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! update-testimonial api -- done
  updateTestimonialLoading: false,
  updateTestimonialRequest: async (reqBody, id) => {
    try {
      set({ updateTestimonialLoading: true });
      let res = await axios.put(
        baseURL + "/update-testimonial/" + id,
        reqBody,
        {
          withCredentials: true,
        }
      );
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ updateTestimonialLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ updateTestimonialLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ updateTestimonialLoading: false });
      return false;
    }
  },
}));

export default TestimonialStore;
