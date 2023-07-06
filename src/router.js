import { createBrowserRouter, Navigate } from 'react-router-dom';
import { productRouter } from './modules/products/products.router';
import Layouts from './components/Layout';
import NotFoundPage from './components/NotFoundPage';

const appRouter = [
	{
		path: '/',
		element: <Navigate to="/products" />,
	},
	...productRouter,
];

const router = createBrowserRouter([
	{
		element: <Layouts />,
		children: appRouter,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

export default router;
