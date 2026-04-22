import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </ProtectedRoutes>
    ),
  },
]);
