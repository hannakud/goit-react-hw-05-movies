import Loader from 'components/Loader/Loader';
import css from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
const { Suspense } = require('react');
const { Outlet, NavLink } = require('react-router-dom');

const Layout = () => {
  return (
    <header>
      <nav className={css.navigation}>
        <ul className={css.wrapper}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.link + ' ' + css.active : css.link
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.link + ' ' + css.active : css.link
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </ul>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </header>
  );
};

export default Layout;
