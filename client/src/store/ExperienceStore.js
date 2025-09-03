import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const ExperienceStore = create((set) => ({
  //! create-experience api -- done
  createExperienceLoading: false,
  createExperienceRequest: async (reqBody) => {
    try {
      set({ createExperienceLoading: true });
      let res = await axios.post(baseURL + "/create-experience", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ createExperienceLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ createExperienceLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ createExperienceLoading: false });
      return false;
    }
  },

  //! all-experience api -- done
  allExperienceData: null,
  allExperienceRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/all-experience", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allExperienceData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-experience api
  deleteExperienceRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-experience/" + id, {
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

  //! single-experience -- done
  singleExperienceData: null,
  singleExperienceRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/single-experience/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ singleExperienceData: res?.data?.data });
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! update-experience api -- done
  updateExperienceLoading: false,
  updateExperienceRequest: async (reqBody, id) => {
    try {
      set({ updateExperienceLoading: true });
      let res = await axios.put(baseURL + "/update-experience/" + id, reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ updateExperienceLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ updateExperienceLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ updateExperienceLoading: false });
      return false;
    }
  },
}));

export default ExperienceStore;
