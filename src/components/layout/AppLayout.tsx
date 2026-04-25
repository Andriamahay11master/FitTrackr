import { logout } from "../../services/authService";
import React from "react";
import { Link } from "react-router-dom";
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = React.useState("dashboard");
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-25 bg-white shadow-md p-4 z-20 lg:w-64 lg:p-5">
        <h2 className="text-xl font-bold mb-6">FitTrack</h2>

        <nav className="space-y-3">
          <Link
            to="/"
            className={`block text-gray-700 hover:text-black ${active === "dashboard" ? "text-black font-bold" : ""}`}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </Link>
          <Link
            to="/weight"
            className={`block text-gray-700 hover:text-black ${active === "weight" ? "text-black font-bold" : ""}`}
            onClick={() => setActive("weight")}
          >
            Weight
          </Link>
          <Link
            to="/meals"
            className={`block text-gray-700 hover:text-black ${active === "meals" ? "text-black font-bold" : ""}`}
            onClick={() => setActive("meals")}
          >
            Meals
          </Link>
        </nav>
      </aside>

      <div className="flex flex-col flex-1 ml-24 mt-12 lg:ml-64">
        {/* Top bar */}
        <div className="fixed w-screen top-0 flex justify-end items-center p-3 bg-white border-b shadow-sm z-10 lg:p-4 lg:inset-x-0 lg:w-auto">
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
