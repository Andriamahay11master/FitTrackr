import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { Navigate } from "react-router-dom";
import FullPageLoader from "../ui/FullPageLoader";

const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { user, loading };
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthState();

  if (loading) return <FullPageLoader />;

  return user ? children : <Navigate to="/login" replace />;
};

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthState();

  if (loading) return <FullPageLoader />;

  return user ? <Navigate to="/" replace /> : children;
};

export default ProtectedRoute;
