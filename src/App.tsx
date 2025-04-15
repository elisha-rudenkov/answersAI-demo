import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from './components/theme-provider';
import { AppLayout } from './components/AppLayout';
import './styles/Dashboard.css';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={
            <ProtectedRoute>
              <AppLayout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  {/* Add other routes here */}
                </Routes>
              </AppLayout>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
