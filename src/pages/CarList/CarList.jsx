import React from 'react';
import Filter from 'components/Filter/Filter';
import CarListElement from 'components/CarListElement/CarListElement';
import { useCars } from 'redux/useCars';

const CarList = () => {
  const { isCars } = useCars();

  return (
    <section>
      <Filter data={isCars}></Filter>
      <CarListElement data={isCars}></CarListElement>
    </section>
  );
};

export default CarList;
