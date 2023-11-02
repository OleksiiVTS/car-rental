import React from 'react';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const CarListElement = ({ data = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [carItem, setCarItem] = useState({});

  const mileage = data => {
    const mileageFull = data.toString();
    const mileage = `${mileageFull.substring(
      0,
      mileageFull.length - 3
    )},${mileageFull.substring(mileageFull.length - 3)}`;
    return mileage;
  };
  const handelClick = car => {
    setCarItem(car);
    setOpenModal(true);
  };
  const closeModal = () => setOpenModal(false);

  return (
    <div>
      <h4>CarListElement</h4>
      {openModal && <Modal data={carItem} closeModal={closeModal} />}
      <ul>
        {data.map(car => (
          <li key={car.id}>
            <img src={car.img} alt="General view of the car" />
            <input type="checkbox" />
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
              {car.type} | {mileage(car.mileage)}
            </p>
            <button type="button" onClick={() => handelClick(car)}>
              Learn more
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarListElement;
