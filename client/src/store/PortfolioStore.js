import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const PortfolioStore = create((set) => ({
  //! create-portfolio api -- done
  createPortfolioLoading: false,
  createPortfolioRequest: async (reqBody) => {
    try {
      set({ createPortfolioLoading: true });
      let res = await axios.post(baseURL + "/create-portfolio", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ createPortfolioLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ createPortfolioLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ createPortfolioLoading: false });
      return false;
    }
  },

  //! all-portfolio api -- done
  allPortfolioData: null,
  allPortfolioRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/all-portfolio", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allPortfolioData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-portfolio api
  deletePortfolioRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-portfolio/" + id, {
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

  //! single-portfolio -- done
  singlePortfolioData: null,
  singlePortfolioRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/single-portfolio/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ singlePortfolioData: res?.data?.data });
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! update-portfolio api -- done
  updatePortfolioLoading: false,
  updatePortfolioRequest: async (reqBody, id) => {
    try {
      set({ updatePortfolioLoading: true });
      let res = await axios.put(baseURL + "/update-portfolio/" + id, reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ updatePortfolioLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ updatePortfolioLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ updatePortfolioLoading: false });
      return false;
    }
  },
}));

export default PortfolioStore;
