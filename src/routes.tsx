import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
