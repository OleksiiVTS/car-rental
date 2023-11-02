import React from 'react';
import Filter from 'components/Filter/Filter';
import CarListElement from 'components/CarListElement/CarListElement';
import { useCars } from 'redux/useCars';

const CarList = () => {
  const { isCars } = useCars();

  return (
    <section>
      <h1>CarList</h1>
      <Filter></Filter>
      <CarListElement data={isCars}></CarListElement>
    </section>
  );
};

export default CarList;
