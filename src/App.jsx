
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Registration from './components/Registration';
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/Dashboard';


const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Registration /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '*', element: <PageNotFound /> }, // Catch-all route for undefined paths
]);

export default router;
