import { ReactNode, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth  } from "../../firebase"
import { Loader } from '@/components/ui/loader';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Only redirect if definitely not authenticated
    if (!loading && !user) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);

  // Only show invisible loading state to prevent flashes
  if (loading) {
    return (
      <>
        {/* Render children underneath to prevent layout shifts */}
        <div style={{ visibility: 'hidden' }}>{children}</div>
        {/* Position loader absolutely to avoid layout shifts */}
        <div className="fixed top-4 right-4 z-50">
          <Loader size="sm" variant="subtle" />
        </div>
      </>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute; 