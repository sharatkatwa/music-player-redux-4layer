import React from "react";
import Signup from "../../features/auth/ui/pages/Signup";
import Login from "../../features/auth/ui/pages/Login";
import { Navigate, Outlet, useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { loggedinUser } = useSelector((store) => store.auth);
  // const navigate = useNavigate();
  if (loggedinUser) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="z-99">
        <Toaster />
      </div>
      <div className=" bg-black/95 h-screen w-screen text-white/95 be-vietnam  py-20 antialiased ">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
