import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { todoRouter } from './modules/todos/router';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  ...todoRouter,
]);

export default router;