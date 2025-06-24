import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from '@pages/auth/Login';
import Register from '@pages/auth/Register';
import Home from '@pages/home/Home';
import Layout from '@Layout/Layout';
import ProtectedRoute from '@routes/ProtectedRoute';
import DataHooksExample from '@pages/examples/DataHooksExample';
import Otp from '@/Pages/auth/Otp';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forget-password',
    element: <Register />,
  },
  {
    path: '/token-code',
    element: <Otp />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'summary',
        element: <Home />,
      },
      {
        path: 'editor',
        element: <Home />,
      },
      {
        path: 'analytics',
        element: <Home />,
      },
      {
        path: 'payments',
        element: <Home />,
      },
      {
        path: 'cash-on-delivery',
        element: <Home />,
      },
      {
        path: 'returns',
        element: <Home />,
      },
      {
        path: 'reports',
        element: <Home />,
      },
      {
        path: 'marketing',
        element: <Home />,
      },
      {
        path: 'example',
        element: <DataHooksExample />,
      },
      {
        path: '*',
        element: <Navigate to="home" />,
      },
      // Add other protected routes here
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter; 