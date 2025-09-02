import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast, unAuthorize } from "../helper/helper";

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

  //! verify-auth
  verifyAuthRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/verify-auth", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      unAuthorize(e.status);
    }
  },

  //! profile details -- done
  profileDetails: null,
  profileDetailsRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/read-profile", {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ profileDetails: res?.data?.data });
        return res?.data?.data;
      }
    } catch (e) {
      unAuthorize(e.status);
    }
  },

  //! profile details by id -- done
  profileDetailsById: null,
  ProfileDetailsByIdRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/read-profile-by-id/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ profileDetailsById: res?.data?.data });
        return res?.data?.data;
      }
    } catch (e) {
      unAuthorize(e.status);
    }
  },

  //! update profile
  profileUpdate: async (reqBody) => {
    try {
      let res = await axios.post(baseURL + "/update-profile", reqBody, {
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
      unAuthorize(e.status);
    }
  },

  //! update profile by id
  profileUpdateByIdRequest: async (reqBody, id) => {
    try {
      let res = await axios.post(
        baseURL + "/update-profile-by-id/" + id,
        reqBody,
        {
          withCredentials: true,
        }
      );
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        return true;
      } else {
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (e) {
      unAuthorize(e.status);
    }
  },

  //! all profile details -- done
  allProfileDetails: null,
  allProfileDetailsRequest: async (perPage, pageNo) => {
    try {
      let res = await axios.get(
        baseURL + "/read-all-profile/" + perPage + "/" + pageNo,
        {
          withCredentials: true,
        }
      );
      if (res?.data?.success === true) {
        set({ allProfileDetails: res?.data?.data });
      }
    } catch (e) {
      unAuthorize(e.status);
    }
  },

  //! delete profile
  deleteProfileRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-profile/" + id, {
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
      unAuthorize(e.status);
    }
  },
}));

export default UserStore;
