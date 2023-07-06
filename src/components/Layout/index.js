import { Outlet } from 'react-router-dom';

import './styles.scss'

export default function Layout() {
  // useEffect

  return (
    <div>
      <h1 className="page-header">HEADER</h1>
      <Outlet />
    </div>
  );
}