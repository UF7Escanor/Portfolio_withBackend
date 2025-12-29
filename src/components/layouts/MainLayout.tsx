import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import MouseFollower from "../MouseFollower";
import FooterTechMarquee from "../TechMaquree";


export function MainLayout() {
  
  return (
    <>
      <Navbar />
      <MouseFollower />
      <Outlet />

      <FooterTechMarquee />
    </>
  );
}
