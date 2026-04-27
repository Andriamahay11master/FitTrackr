import { logout } from "../../services/authService";
import React from "react";
import { Link } from "react-router-dom";
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = React.useState("dashboard");
  const [showSidebar, setShowSidebar] = React.useState(false);

  const closeSidebar = () => setShowSidebar(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-4 z-30 transform transition-transform duration-300 lg:translate-x-0 lg:w-64 lg:p-5 ${
          showSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">FitTrack</h2>
          <button
            type="button"
            className="text-gray-600 hover:text-black lg:hidden"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="space-y-3">
          <Link
            to="/"
            className={`block text-gray-700 hover:text-black ${active === "dashboard" ? "text-black font-bold" : ""}`}
            onClick={() => {
              setActive("dashboard");
              closeSidebar();
            }}
          >
            Dashboard
          </Link>
          <Link
            to="/weight"
            className={`block text-gray-700 hover:text-black ${active === "weight" ? "text-black font-bold" : ""}`}
            onClick={() => {
              setActive("weight");
              closeSidebar();
            }}
          >
            Weight
          </Link>
          <Link
            to="/meals"
            className={`block text-gray-700 hover:text-black ${active === "meals" ? "text-black font-bold" : ""}`}
            onClick={() => {
              setActive("meals");
              closeSidebar();
            }}
          >
            Meals
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col flex-1 lg:ml-64 mt-16 lg:mt-12">
        {/* Top bar */}
        <div className="fixed inset-x-0 top-0 flex items-center justify-between p-3 bg-white border-b shadow-sm z-10 lg:p-4 lg:inset-x-0 lg:w-auto">
          <button
            type="button"
            className="text-gray-700 hover:text-black lg:hidden"
            onClick={() => setShowSidebar((prev) => !prev)}
            aria-label="Open navigation menu"
          >
            ☰
          </button>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Main content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
