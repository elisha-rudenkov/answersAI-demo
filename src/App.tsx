import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { ThemeProvider } from './components/theme/theme-provider';
import { AppLayout } from './components/layout/AppLayout';
import { LoadingTransitionProvider } from './components/ui/loading-transition';
import { Loader } from './components/ui/loader';
import { ViewTransition } from './components/ui/view-transition';
import './styles/Dashboard.css';
import './styles/App.css';
import './styles/transitions.css';

// Lazy load pages for code splitting 
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  // Pre-load auth state at the app level
  const [, ] = useAuthState(auth);
  
  return (
    <ThemeProvider>
      <LoadingTransitionProvider>
        <ViewTransition />
        <div className="app">
          <Suspense fallback={<div className="fixed top-4 right-4 z-50"><Loader size="sm" variant="subtle" /></div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={
                <ProtectedRoute>
                  <AppLayout>
                    <Suspense fallback={<div className="flex items-center justify-center h-full"><Loader /></div>}>
                      <Routes>
                        <Route path="/" element={<div className="page-content"><Dashboard /></div>} />
                        {/* Add other routes here */}
                      </Routes>
                    </Suspense>
                  </AppLayout>
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
        </div>
      </LoadingTransitionProvider>
    </ThemeProvider>
  );
}

export default App;
