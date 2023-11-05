import React, { Suspense } from 'react';
import logo from '../Pictures/car-rentua-removebg-preview.png';
import { Outlet, useNavigate } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';
import { useCars } from 'redux/useCars';
import {
  DivMainHeader,
  Header,
  UlNavHeader,
  DivSecondHeader,
  NavLinkStyled,
  SpanLogoHeader,
} from './HeaderLayout.styled';

const HeaderLayout = () => {
  const { isRefreshing } = useCars();
  let navigate = useNavigate();

  return (
    <>
      <Header>
        <DivMainHeader>
          <DivSecondHeader>
            <div>
              <SpanLogoHeader>
                <img
                  src={logo}
                  alt="Logo"
                  width={100}
                  onClick={() => navigate('/')}
                />
              </SpanLogoHeader>
            </div>
            <nav>
              <UlNavHeader>
                <li>
                  <NavLinkStyled to="/">Home</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to="car-list">Car List</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to="favorite">Favorite</NavLinkStyled>
                </li>
              </UlNavHeader>
            </nav>
          </DivSecondHeader>
        </DivMainHeader>
      </Header>
      <main>
        <Suspense fallback={null}>
          {isRefreshing ? (
            <Circles
              height="80"
              width="80"
              color="#4d78a9"
              wrapperClass={css.loader}
            />
          ) : (
            <Outlet />
          )}
        </Suspense>
      </main>
    </>
  );
};

export default HeaderLayout;
