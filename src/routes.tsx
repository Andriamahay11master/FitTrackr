import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ProtectedRoute, {
  PublicRoute,
} from "./components/routes/ProtectedRoutes";
import Meals from "./pages/meals/Meals";
import Weight from "./pages/weight/Weight";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/weight",
    element: (
      <ProtectedRoute>
        <AppLayout>
          <Weight />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/meals",
    element: (
      <ProtectedRoute>
        <AppLayout>
          <Meals />
        </AppLayout>
      </ProtectedRoute>
    ),
  },
]);
