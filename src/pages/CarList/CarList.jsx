import React from 'react';
import Filter from 'components/Filter/Filter';
import CarListElement from 'components/CarListElement/CarListElement';
import { useCars } from 'redux/useCars';
import ButtonLoadMore from 'components/Button/ButtonLoadMore';

const CarList = () => {
  const { isCars, isVisibleCars } = useCars();
  const visibleLoadMor = Number.isInteger(isVisibleCars.length / 12);

  return (
    <section>
      <Filter data={isCars}></Filter>
      <CarListElement data={isVisibleCars}></CarListElement>
      {visibleLoadMor && <ButtonLoadMore />}
    </section>
  );
};

export default CarList;
