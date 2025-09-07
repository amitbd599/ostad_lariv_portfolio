import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const ServiceStore = create((set) => ({
  //! create-service api -- done
  createServiceLoading: false,
  createServiceRequest: async (reqBody) => {
    try {
      set({ createServiceLoading: true });
      let res = await axios.post(baseURL + "/create-service", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ createServiceLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ createServiceLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ createServiceLoading: false });
      return false;
    }
  },

  //! all-service api -- done
  allServiceData: null,
  allServiceRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/all-service", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allServiceData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-service api
  deleteServiceRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-service/" + id, {
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

  //! single-service -- done
  singleServiceData: null,
  singleServiceRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/single-service/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ singleServiceData: res?.data?.data });
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! update-service api -- done
  updateServiceLoading: false,
  updateServiceRequest: async (reqBody, id) => {
    try {
      set({ updateServiceLoading: true });
      let res = await axios.put(baseURL + "/update-service/" + id, reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ updateServiceLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ updateServiceLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ updateServiceLoading: false });
      return false;
    }
  },
}));

export default ServiceStore;
