import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const UserStore = create((set) => ({
  //! login-user api -- done
  loginLoading: false,
  loginUserRequest: async (reqBody) => {
    try {
      set({ loginLoading: true });
      let res = await axios.post(baseURL + "/login", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ loginLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ loginLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ loginLoading: false });
      return false;
    }
  },

  //! logout api -- done
  logoutLoading: false,
  logoutRequest: async () => {
    try {
      set({ logoutLoading: true });
      let res = await axios.get(baseURL + "/logout", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ logoutLoading: false });
        return true;
      } else {
        set({ logoutLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ logoutLoading: false });
    }
  },

  //! dashboard api -- done
  dashboardData: null,
  dashboardRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/dashboard", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ dashboardData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },
}));

export default UserStore;
