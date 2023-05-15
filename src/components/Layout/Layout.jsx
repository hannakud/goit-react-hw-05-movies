import Loader from 'components/Loader/Loader';
import css from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
const { Suspense } = require('react');
const { Outlet, NavLink } = require('react-router-dom');

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className={css.wrapper}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </ul>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
};

export default Layout;
