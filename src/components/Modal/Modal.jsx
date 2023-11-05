import React from 'react';
import sprite from '../Pictures/sprite.svg';
// import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonModal,
  DivBackdrop,
  DivContainer,
  DivModalMarkList,
  ImgCarModal,
  PDescription,
  DivMiniDescription,
  SpanModalMareList,
  HFourModal,
  UlModalConditions,
  DivImgBox,
  ButtonClose,
} from './Modal.styled';

const Modal = ({ data, closeModal }) => {
  const dispatch = useDispatch();
  const conditions = data.rentalConditions.split('\n');
  const age = conditions[0].split(':');

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
        <ButtonClose width={16} height={16} onClick={closeModal}>
          <use href={sprite + '#cross'}></use>
        </ButtonClose>
        <div>
          <DivImgBox>
            <ImgCarModal src={data.img} alt="General view of the car" />
          </DivImgBox>
          <DivModalMarkList>
            <p>{data.make}</p>
            <p>
              <SpanModalMareList>{data.model}</SpanModalMareList>,
            </p>
            <p>{data.year}</p>
          </DivModalMarkList>
          <DivMiniDescription>
            {data.address.replace(/,/g, ' |')} | {data.rentalCompany} |{' '}
            {data.make} | {data.model} | {data.type} |{' '}
            {data.mileage.toLocaleString('en-IN')} | {data.fuelConsumption} |{' '}
            {data.engineSize}
          </DivMiniDescription>
          <PDescription>{data.description}</PDescription>
          <HFourModal>Accessories and functionalities:</HFourModal>
          <DivMiniDescription>
            <p>{data.accessories.join(' | ')}</p>
            <p>{data.functionalities.join(' | ')}</p>
          </DivMiniDescription>
          <HFourModal>Rental Conditions:</HFourModal>
          <UlModalConditions>
            {/* {conditions.map(condition => (
              <li key={nanoid()}>
                <p>{condition}</p>
              </li>
            ))} */}
            <li>
              {age[0]}:<SpanModalMareList>{age[1]}</SpanModalMareList>
            </li>
            <li>{conditions[1]}</li>
            <li>{conditions[2]}</li>
            <li>
              <p>
                Mileage:{' '}
                <SpanModalMareList>
                  {data.mileage.toLocaleString('en-IN')}
                </SpanModalMareList>
              </p>
            </li>
            <li>
              <p>
                Price: <SpanModalMareList>{data.rentalPrice}</SpanModalMareList>
              </p>
            </li>
          </UlModalConditions>
        </div>
        <ButtonModal
          target="_blank"
          rel="noreferrer"
          href="https://support.google.com/chrome/thread/230556846?hl=ru"
        >
          Rental car
        </ButtonModal>
      </DivContainer>
    </DivBackdrop>
  );
};

export default Modal;
