import React from "react";
import toast from "react-hot-toast";

const useToast = () => {
  const errorToast = (message) => toast.error(message);
  const successToast = (message) => toast.success(message);
  return { errorToast, successToast };
};

export default useToast;
