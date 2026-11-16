import { Outlet } from "react-router-dom";
import ProtectedRoute from "../users/ProtectedRoute";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../Dashboard/Sidebar";

export default function AdminLayout() {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="sm:hidden fixed right-0 z-50" />
        <Outlet />
      </SidebarProvider>
    </ProtectedRoute>
  );
}
