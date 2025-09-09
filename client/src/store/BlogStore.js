import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const BlogStore = create((set) => ({
  //! create-blog api -- done
  createBlogLoading: false,
  createBlogRequest: async (reqBody) => {
    try {
      set({ createBlogLoading: true });
      let res = await axios.post(baseURL + "/create-blog", reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ createBlogLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ createBlogLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ createBlogLoading: false });
      return false;
    }
  },

  //! all-blog api -- done
  allBlogData: null,
  totalBlog: 0,
  allBlogRequest: async (item, pageNo) => {
    try {
      let res = await axios.get(baseURL + `/all-blog/${item}/${pageNo}`, {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allBlogData: res?.data?.data?.blogs });
        set({ totalBlog: res?.data?.data?.totalCount[0]?.count });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-blog api
  deleteBlogRequest: async (id) => {
    try {
      let res = await axios.delete(baseURL + "/delete-blog/" + id, {
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

  //! single-blog -- done
  singleBlogData: null,
  singleBlogRequest: async (id) => {
    try {
      let res = await axios.get(baseURL + "/single-blog/" + id, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        set({ singleBlogData: res?.data?.data });
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! update-blog api -- done
  updateBlogLoading: false,
  updateBlogRequest: async (reqBody, id) => {
    try {
      set({ updateBlogLoading: true });
      let res = await axios.put(baseURL + "/update-blog/" + id, reqBody, {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        set({ updateBlogLoading: false });
        return true;
      } else {
        ErrorToast(res?.data?.message);
        set({ updateBlogLoading: false });
        return false;
      }
    } catch (e) {
      console.log(e);
      set({ updateBlogLoading: false });
      return false;
    }
  },
}));

export default BlogStore;
