import React from 'react';
import Filter from 'components/Filter/Filter';
import CarListElement from 'components/CarListElement/CarListElement';
import { useCars } from 'redux/useCars';
import ButtonLoadMore from 'components/Button/ButtonLoadMore';

const CarList = () => {
  const { isCars, isVisibleCars } = useCars();
  console.log(isCars);
  return (
    <section>
      <Filter data={isCars}></Filter>
      <CarListElement data={isVisibleCars}></CarListElement>
      <ButtonLoadMore />
    </section>
  );
};

export default CarList;
