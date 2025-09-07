import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const AdvantageStore = create((set) => ({
  //! create-advantage api -- done
  createAdvantageLoading: false,
  createAdvantageRequest: async (reqBody) => {
    try {
      set({ createAdvantageLoading: true });
      let res = await axios.post(baseURL + "/create-advantage", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ createAdvantageLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ createAdvantageLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ createAdvantageLoading: false });
      return false;
    }
  },

  //! all-advantage api -- done
  allAdvantageData: null,
  allAdvantageRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/all-advantage", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allAdvantageData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-advantage api
  deleteAdvantageRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-advantage/" + id, {
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

  //! single-advantage -- done
  singleAdvantageData: null,
  singleAdvantageRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/single-advantage/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ singleAdvantageData: res?.data?.data });
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! update-advantage api -- done
  updateAdvantageLoading: false,
  updateAdvantageRequest: async (reqBody, id) => {
    try {
      set({ updateAdvantageLoading: true });
      let res = await axios.put(baseURL + "/update-advantage/" + id, reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ updateAdvantageLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ updateAdvantageLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ updateAdvantageLoading: false });
      return false;
    }
  },
}));

export default AdvantageStore;
