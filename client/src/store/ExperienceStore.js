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
}));

export default ExperienceStore;
