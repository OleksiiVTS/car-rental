import React from 'react';
import { useCars } from 'redux/useCars';
import sprite from '../../Pictures/sprite.svg';
import {
  ButtonCarItem,
  DivCarMark,
  DivCarMarkList,
  DivMainCarItem,
  ImgCarItem,
  InputCarItem,
  LabelCarItem,
  PMiniDescription,
  SpanCarMareList,
} from './CarItem.styled';

const CarItem = ({ car, handelClick }) => {
  const { addCarToFavorite, dellCarFromFavorite, isFavoriteCars } = useCars();
  const isFavor = isFavoriteCars.includes(car);

  const handelChange = () => {
    if (isFavor) {
      dellCarFromFavorite(car);
      return;
    }
    addCarToFavorite(car);
  };

  return (
    <DivMainCarItem>
      <ImgCarItem src={car.img} alt="General view of the car" />
      <LabelCarItem>
        <InputCarItem
          type="checkbox"
          id={car.id}
          checked={isFavor}
          onChange={handelChange}
        />
        <svg width={18} height={18}>
          {!isFavor ? (
            <use href={sprite + '#like'}></use>
          ) : (
            <use href={sprite + '#dislike'}></use>
          )}
        </svg>
      </LabelCarItem>
      <DivCarMark>
        <DivCarMarkList>
          <p>{car.make}</p>
          <p>
            <SpanCarMareList>{car.model}</SpanCarMareList>,
          </p>
          <p>{car.year}</p>
        </DivCarMarkList>
        <div>
          <p>{car.rentalPrice}</p>
        </div>
      </DivCarMark>
      <PMiniDescription>
        {car.address.replace(/,/g, ' |')} | {car.rentalCompany} | {car.make} |{' '}
        {car.model} | {car.type} | {car.mileage.toLocaleString('en-IN')}
      </PMiniDescription>
      <ButtonCarItem type="button" onClick={() => handelClick(car)}>
        Learn more
      </ButtonCarItem>
    </DivMainCarItem>
  );
};

export default CarItem;
