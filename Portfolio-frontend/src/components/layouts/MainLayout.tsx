import { Outlet } from "react-router-dom";
import MouseFollower from "../MouseFollower";
import Navbar from "../Navbar";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <MouseFollower />
      <Outlet />

      {/* <FooterTechMarquee /> */}
    </>
  );
}
