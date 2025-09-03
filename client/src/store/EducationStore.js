import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const EducationStore = create((set) => ({
  //! create-education api -- done
  createEducationLoading: false,
  createEducationRequest: async (reqBody) => {
    try {
      set({ createEducationLoading: true });
      let res = await axios.post(baseURL + "/create-education", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ createEducationLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ createEducationLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ createEducationLoading: false });
      return false;
    }
  },

  //! all-education api -- done
  allEducationData: null,
  allEducationRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/all-education", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allEducationData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-education api
  deleteEducationRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-education/" + id, {
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

  //! single-education -- done
  singleEducationData: null,
  singleEducationRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/single-education/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ singleEducationData: res?.data?.data });
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! update-education api -- done
  updateEducationLoading: false,
  updateEducationRequest: async (reqBody, id) => {
    try {
      set({ updateEducationLoading: true });
      let res = await axios.put(baseURL + "/update-education/" + id, reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ updateEducationLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ updateEducationLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ updateEducationLoading: false });
      return false;
    }
  },
}));

export default EducationStore;
