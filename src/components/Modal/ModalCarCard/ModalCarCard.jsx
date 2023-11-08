import React from 'react';
import ModalPortal from '../ModalPortal.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonModal,
  DivModalMarkList,
  ImgCarModal,
  PDescription,
  DivMiniDescription,
  SpanModalMareList,
  HFourModal,
  UlModalConditions,
  DivImgBox,
} from './ModalCarCard.styled.jsx';

const ModalCarCard = ({ data, closeModal }) => {
  const dispatch = useDispatch();
  const conditions = data.rentalConditions.split('\n');
  const age = conditions[0].split(':');

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
    <ModalPortal closeModal={closeModal}>
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
    </ModalPortal>
  );
};

export default ModalCarCard;
