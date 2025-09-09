import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const FileStore = create((set) => ({
  //! upload File Request Loading api -- done
  uploadFileRequestLoading: false,
  uploadFileRequest: async (formData) => {
    console.log(formData);

    set({ uploadFileRequestLoading: true });

    let res = await axios.post(`${baseURL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res?.data?.success === true) {
      set({ uploadFileRequestLoading: false });
      return true;
    } else {
      set({ uploadFileRequestLoading: false });
      return false;
    }
  },

  //! all-file api -- done
  allFileData: null,
  allFileRequest: async () => {
    try {
      let res = await axios.get(baseURL + "/all-file", {
        withCredentials: true,
        credentials: "include",
      });
      if (res?.data?.success === true) {
        set({ allFileData: res?.data?.data });
      }
    } catch (e) {
      console.log(e);
    }
  },

  //! delete-file api
  deleteFileRequest: async (id, filename) => {
    console.log(id, filename);

    try {
      let res = await axios.post(
        baseURL + "/remove",
        { _id: id, filename },
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
      console.log(e);
    }
  },
}));

export default FileStore;
