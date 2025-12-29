import { Routes, Route, BrowserRouter } from "react-router-dom";

import AnimatedLayout from "./components/layouts/AnimatedLayout";
import { MainLayout } from "./components/layouts/MainLayout";
import Home from "./components/pages/Home";
import LoginComponent from "./components/auth/LoginComponent";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import PublicRoute from "./components/users/PublicRoute";
import AdminLayout from "./components/layouts/AdminLayout";
import UsersPage from "./components/pages/UsersPage";
import UserDetailsPage from "./components/pages/UserDetailsPage";
import NotFoundPage from "./components/users/NotFoundPage";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster />
          <Routes>
            {/* public routes */}

            {/* <Route path="/auth/login" element={<LoginComponent />} /> */}
            <Route
              path="/auth/login"
              element={
                <PublicRoute allowAuthenticated={false}>
                  <LoginComponent />
                </PublicRoute>
              }
            />

            <Route element={<AnimatedLayout />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Home />} />
              </Route>
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<UsersPage />} />
              <Route path="users/:id" element={<UserDetailsPage />} />

              {/* <Route path="products" element={<ProductsPage />} /> */}

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
