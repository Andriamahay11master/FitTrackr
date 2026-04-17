const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
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

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default AppLayout;
