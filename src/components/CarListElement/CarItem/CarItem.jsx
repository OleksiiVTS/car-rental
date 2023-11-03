import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCars } from 'redux/useCars';

const CarItem = ({ car, handelClick }) => {
  const { addCarToFavorite, dellCarFromFavorite, isFavoriteCars } = useCars();
  const [favorite, setFavorite] = useState(false);

  const isFavor = isFavoriteCars.find(carItem => carItem.id === car.id);
  useEffect(() => {
    if (isFavor) {
      setFavorite(true);
    }
  }, [isFavor]);

  const handelChange = () => {
    if (favorite) {
      setFavorite(!favorite);
      dellCarFromFavorite(car);
      return;
    }
    setFavorite(!favorite);
    addCarToFavorite(car);
  };

  return (
    <>
      <img src={car.img} alt="General view of the car" />
      <input
        type="checkbox"
        id={car.id}
        checked={favorite}
        onChange={handelChange}
      />
      <div>
        <div>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
        </div>
        <div>
          <p>{car.rentalPrice}</p>
        </div>
      </div>
      <p>
        {car.address} | {car.rentalCompany} | {car.make} | {car.model} |{' '}
        {car.type} | {car.mileage.toLocaleString('en-IN')}
      </p>
      <button type="button" onClick={() => handelClick(car)}>
        Learn more
      </button>
    </>
  );
};

export default CarItem;
