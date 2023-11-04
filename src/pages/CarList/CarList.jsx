import React from 'react';
import Filter from 'components/Filter/Filter';
import CarListElement from 'components/CarListElement/CarListElement';
import { useCars } from 'redux/useCars';

const CarList = () => {
  const { isCars, isVisibleCars } = useCars();

  return (
    <section>
      <Filter data={isCars}></Filter>
      <CarListElement data={isVisibleCars}></CarListElement>
    </section>
  );
};

export default CarList;
