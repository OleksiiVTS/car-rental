import React from 'react';
import Modal from 'components/Modal/Modal';
import CarItem from './CarItem/CarItem';
import { useState } from 'react';
import { DivCarList, UlCarList } from './CarListElement.styled';

const CarListElement = ({ data = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [carItem, setCarItem] = useState({});

  const handelClick = car => {
    setCarItem(car);
    setOpenModal(true);
  };
  const closeModal = () => setOpenModal(false);

  return (
    <DivCarList>
      {openModal && <Modal data={carItem} closeModal={closeModal} />}
      <UlCarList>
        {data.map(car => (
          <li key={car.id}>
            <CarItem car={car} handelClick={handelClick} />
          </li>
        ))}
      </UlCarList>
    </DivCarList>
  );
};

export default CarListElement;
