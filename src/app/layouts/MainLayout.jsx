import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

const MainLayout = () => {
  const { loggedinUser } = useSelector((store) => store.auth);
  // const navigate = useNavigate();
  if (!loggedinUser) {
   return  <Navigate to={'/auth/login'} />
  }
  return (
    <>
      <div className="z-99">
        <Toaster />
      </div>

      <div>MainLayout</div>
    </>
  );
};

export default MainLayout;
