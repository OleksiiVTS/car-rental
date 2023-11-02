import React from 'react';
import Filter from 'components/Filter/Filter';
import CarListElement from 'components/CarListElement/CarListElement';
import { useCars } from 'redux/useCars';

const Favorite = () => {
  const { isFavoriteCars } = useCars();

  return (
    <section>
      <h1>Favorite</h1>
      <Filter></Filter>
      <CarListElement data={isFavoriteCars}></CarListElement>
    </section>
  );
};

export default Favorite;
