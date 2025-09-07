import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const CommentStore = create((set) => ({
  //! create-comment api -- done
  createCommentLoading: false,
  createCommentRequest: async (reqBody) => {
    try {
      set({ createCommentLoading: true });
      let res = await axios.post(baseURL + "/create-comment", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ createCommentLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ createCommentLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ createCommentLoading: false });
      return false;
    }
  },

  //! all-comment api -- done
  allCommentData: null,
  allCommentRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/all-comment", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allCommentData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-comment api
  deleteCommentRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-comment/" + id, {
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

  //! single-comment -- done
  singleCommentData: null,
  singleCommentRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/single-comment/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ singleCommentData: res?.data?.data });
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! update-comment api -- done
  updateCommentLoading: false,
  updateCommentRequest: async (reqBody, id) => {
    try {
      set({ updateCommentLoading: true });
      let res = await axios.put(
        baseURL + "/update-comment/" + id,
        reqBody,
        {
          withCredentials: true,
        }
      );
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ updateCommentLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ updateCommentLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ updateCommentLoading: false });
      return false;
    }
  },
}));

export default CommentStore;
