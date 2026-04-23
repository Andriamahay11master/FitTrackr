import { logout } from "../../services/authService";
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md p-5 z-20">
        <h2 className="text-xl font-bold mb-6">FitTrack</h2>

        <nav className="space-y-3">
          <a href="/" className="block text-gray-700 hover:text-black">
            Dashboard
          </a>
          <a href="/weight" className="block text-gray-700 hover:text-black">
            Weight
          </a>
          <a href="/meals" className="block text-gray-700 hover:text-black">
            Meals
          </a>
        </nav>
      </aside>

      <div className="flex flex-col flex-1 ml-64 mt-12">
        {/* Top bar */}
        <div className="fixed inset-x-0 top-0 flex justify-end items-center p-4 bg-white border-b shadow-sm z-10">
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
