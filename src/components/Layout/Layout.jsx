import Loader from 'components/Loader/Loader';

const { Suspense } = require('react');
const { Outlet, NavLink } = require('react-router-dom');

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </ul>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
