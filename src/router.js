import { createBrowserRouter, Navigate } from 'react-router-dom';
import { productRouter } from './modules/products/products.router';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';

const appRouter = [
  {
    path: "/",
    element:  <Navigate to="/products" />,
  },
  ...productRouter
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: appRouter
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

export default router;