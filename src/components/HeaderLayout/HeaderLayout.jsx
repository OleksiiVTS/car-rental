import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';

const HeaderLayout = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <h1>Logo</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="car-list">Car List</NavLink>
              </li>
              <li>
                <NavLink to="favorite">Favorite</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense
          fallback={
            <Circles
            //   height="80"
            //   width="80"
            //   color="#4d78a9"
            //   wrapperClass={css.loader}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default HeaderLayout;
