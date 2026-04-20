import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../../features/dashboard/ui/pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../../features/auth/ui/pages/Login";
import Signup from "../../features/auth/ui/pages/Signup";

export const AppRoutes = () => {
  const AllRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
          path:'',
          element:<Home />
        }
      ]
    },
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        { path: "", element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]);

  return <RouterProvider router={AllRoutes} />;
};

export default AppRoutes;
