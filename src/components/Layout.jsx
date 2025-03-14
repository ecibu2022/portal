import { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Home from "../components/dashboard/Home";
import Documents from "../components/dashboard/Documents";
import Profile from "../components/dashboard/Profile";
import Notifications from "../components/dashboard/Notifications";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ForgotPassword from "../components/auth/ForgotPassword";
import ResetPassword from "../components/auth/ResetPassword";
import { Alert } from "@material-tailwind/react";

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Condition to show sidebar (exclude certain routes like login, register)
  const shouldShowSidebar = !["/", "/login", "/register", "/forgot", "/reset"].includes(location.pathname);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  const handleSignOut = () => {
    Alert('You have been signed out.');
  };

  return (
    <div className="flex min-h-screen">
      {/* Hamburger menu for mobile */}
      <div className="lg:hidden p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-cyan-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar for larger screens */}
      {shouldShowSidebar && (
        <div
          className={`lg:block ${
            isSidebarOpen ? "block" : "hidden"
          } bg-cyan-800 text-white w-64 p-6 space-y-6 fixed inset-0 z-50 left-0 inset-y-0 lg:relative`}
        >
          <Sidebar onLinkClick={handleLinkClick} onSignOut={handleSignOut}/>
        </div>
      )}

      {/* Main content area */}
      <div
        className={`flex-1 p-6 bg-white transition-all ${
          shouldShowSidebar && isSidebarOpen ? "ml-0" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/documents" element={<Documents />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
