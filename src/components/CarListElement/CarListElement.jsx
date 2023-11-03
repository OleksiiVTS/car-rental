import React from 'react';
import Modal from 'components/Modal/Modal';
import CarItem from './CarItem/CarItem';
import { useState } from 'react';

const CarListElement = ({ data = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [carItem, setCarItem] = useState({});

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
            <CarItem car={car} handelClick={handelClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarListElement;
