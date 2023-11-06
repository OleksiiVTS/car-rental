import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
import { useCars } from 'redux/useCars.js';
// import { Circles } from 'react-loader-spinner';

const HeaderLayout = loadable(() =>
  import('../components/HeaderLayout/HeaderLayout.jsx')
);
const Home = loadable(() => import('../pages/Home/Home.jsx'));
const CarList = loadable(() => import('../pages/CarList/CarList.jsx'));
const Favorite = loadable(() => import('../pages/Favorite/Favorite.jsx'));
const NotFound = loadable(() => import('../pages/NotFound.jsx'));

const App = () => {
  const { getCarsList } = useCars();

  useEffect(() => {
    getCarsList();
  }, [getCarsList]);

  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="car-list" element={<CarList />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
