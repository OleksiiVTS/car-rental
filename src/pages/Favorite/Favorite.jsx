import React from 'react';
import Filter from 'components/Filter/Filter';
import CarListElement from 'components/CarListElement/CarListElement';
import { useCars } from 'redux/useCars';

const Favorite = () => {
  const { isFavoriteCars, isVisibleFavoriteCars } = useCars();
  console.log();

  return (
    <section>
      <Filter data={isFavoriteCars}></Filter>
      <CarListElement data={isVisibleFavoriteCars}></CarListElement>
    </section>
  );
};

export default Favorite;
