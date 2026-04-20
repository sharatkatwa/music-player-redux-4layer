import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Navbar from "../../shared/components/Navbar";
import { Group, Panel } from "react-resizable-panels";
import Player from "../../features/player/ui/components/Player";

const MainLayout = () => {
  const { loggedinUser } = useSelector((store) => store.auth);
  // const navigate = useNavigate();
  if (!loggedinUser) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <>
      <div className="z-99">
        <Toaster />
      </div>

      <div className="h-screen overflow-y-auto bg-black/95 text-white/95 bg-black/95 antialiased">
        <Navbar />
        <div className="h-[calc(100vh-11rem)] hidden md:block">
          <Group className="gap-2 ">
            <Panel maxSize={"25%"} minSize={"15%"} className="bg-gray-500/20 rounded "></Panel>
            <Panel className=" rounded [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <Outlet />
            </Panel>
            <Panel maxSize={"25%"} minSize={"15%"} className="bg-gray-500/20 rounded"></Panel>
          </Group>
        </div>
        <div className="h-[calc(100vh-11rem)] block md:hidden mx-4">
          <Outlet />
        </div>
        <Player />
      </div>
    </>
  );
};

export default MainLayout;
