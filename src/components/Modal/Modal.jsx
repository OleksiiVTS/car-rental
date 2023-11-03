import React from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DivBackdrop, DivContainer } from './Modal.styled';

const Modal = ({ data, closeModal }) => {
  const dispatch = useDispatch();
  const conditions = data.rentalConditions.split('\n');

  const closeBackdrop = e => {
    const isBackdrop = e.target.attributes.name?.nodeValue;
    if (isBackdrop) {
      closeModal();
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, closeModal]);

  return (
    <DivBackdrop name="backdrop" onClick={closeBackdrop}>
      <DivContainer>
        <button type="button" onClick={closeModal}>
          X
        </button>
        <div>
          <img src={data.img} alt="General view of the car" />
          <div>
            <p>{data.make}</p>
            <p>{data.model}</p>
            <p>{data.year}</p>
          </div>
          <p>
            {data.address} | {data.rentalCompany} | {data.make} | {data.model} |{' '}
            {data.type} | {data.mileage.toLocaleString('en-IN')} |{' '}
            {data.fuelConsumption} | {data.engineSize}
          </p>
          <p>{data.description}</p>
          <div>
            <h5>Accessories and functionalities:</h5>
            <p>{data.accessories.join(' | ')}</p>
            <p>{data.functionalities.join(' | ')}</p>
          </div>
          <div>
            <h5>Rental Conditions:</h5>
            <ul>
              {conditions.map(condition => (
                <li key={nanoid()}>
                  <p>{condition}</p>
                </li>
              ))}
              <li>
                <p>
                  Mileage: <span>{data.mileage.toLocaleString('en-IN')}</span>
                </p>
              </li>
              <li>
                <p>
                  Price: <span>{data.rentalPrice}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <a href="tel:+380730000000">Rental car</a>
      </DivContainer>
    </DivBackdrop>
  );
};

export default Modal;
