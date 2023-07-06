import ProductListPage from './pages/list';
import ProductDetailPage from './pages/detail';

export const productRouter = [
  {
    path: "/products",
    element:  <ProductListPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />
  }
];