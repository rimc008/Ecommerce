
import { toast } from "react-toastify";

export const successToast = (message) => {
  toast.success(message, {
    className:
      "bg-white text-green-500 font-bold rounded-xl top-30 right-25 shadow-lg",

    progressClassName: "!bg-green-500",
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    className:
      "bg-white text-red-500 font-bold rounded-xl shadow-lg",

    progressClassName: "!bg-red-500",
  });
};