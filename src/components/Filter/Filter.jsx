import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, useFormik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCars } from 'redux/useCars';
import {
  ButtonFormik,
  DivFormikMileage,
  FieldStyledFormik,
  FieldStyledFormikPrice,
  FormStyledFormik,
  InputFrom,
  InputTo,
  LabelFormik,
  OptionSelectFormik,
  SpanMark,
  SpanPrice,
} from './Filter.styled';

const Filter = ({ data }) => {
  const [markSelect, setMarkSelect] = useState([]);
  const [rentalPriceSelect, setRentalPriceSelect] = useState([]);
  const [mileageSelect, setMileageSelect] = useState({
    minMileage: '',
    maxMileage: '',
  });

  useEffect(() => {
    const mark = [...new Set(data.map(car => car.make))];
    setMarkSelect(mark);
    const rentalPrice = [...new Set(data.map(car => car.rentalPrice.slice(1)))];
    setRentalPriceSelect(rentalPrice);
    const mileage = [...new Set(data.map(car => car.mileage))];
    const minMileage = Math.min(...mileage).toLocaleString('en-IN');
    const maxMileage = Math.max(...mileage).toLocaleString('en-IN');
    setMileageSelect({ minMileage, maxMileage });
  }, [data]);

  const { addDataToFilter } = useCars();
  const sortF = (a, b) => {
    return a - b;
  };
  const formik = useFormik({
    initialValues: {
      carBrand: '',
      price: '',
      fromMileage: mileageSelect.minMileage,
      toMileage: mileageSelect.minMileage,
    },
    onSubmit: values => {
      if (values.toMileage <= values.fromMileage) {
        alert(`Sorry. The "From" price cannot be greater than the "To" price.`);
        return;
      }
      addDataToFilter(values);
    },
  });

  const min = parseFloat(mileageSelect.minMileage).toFixed(3);
  // const max = mileageSelect.maxMileage;
  // console.log(max);
  const toMileage = formik.values.toMileage
    ? parseFloat(formik.values.toMileage).toFixed(3)
    : '';
  const fromMileage = formik.values.fromMileage
    ? parseFloat(formik.values.fromMileage).toFixed(3)
    : '';

  return (
    <div>
      <div>
        <button type="button">Open Filter</button>
      </div>
      <Formik>
        <FormStyledFormik onSubmit={formik.handleSubmit}>
          <LabelFormik htmlFor="carBrand">
            {!formik.values.carBrand && <SpanMark>Enter the mark</SpanMark>}
            Car brand
            <br />
            <FieldStyledFormik
              id="carBrand"
              as="select"
              name="carBrand"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.carBrand}
            >
              <OptionSelectFormik value=""></OptionSelectFormik>
              {markSelect.map(item => (
                <OptionSelectFormik key={nanoid()} value={item}>
                  {item}
                </OptionSelectFormik>
              ))}
            </FieldStyledFormik>
          </LabelFormik>
          <LabelFormik htmlFor="price">
            <SpanMark>To:</SpanMark>
            <SpanPrice> $</SpanPrice>
            Price/ 1 hour
            <br />
            <FieldStyledFormikPrice
              id="price"
              as="select"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            >
              <OptionSelectFormik value=""></OptionSelectFormik>
              {rentalPriceSelect.sort(sortF).map(item => (
                <OptionSelectFormik key={nanoid()} value={item}>
                  {item}
                </OptionSelectFormik>
              ))}
            </FieldStyledFormikPrice>
          </LabelFormik>
          <LabelFormik htmlFor="mileage / km">
            Car mileage / km
            <br />
            <DivFormikMileage>
              <InputFrom
                id="fromMileage"
                type="number"
                name="fromMileage"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={fromMileage}
                step="0.100"
                placeholder={`From: ${mileageSelect.minMileage.toLocaleString(
                  'en-IN'
                )}`}
                min={min}
              />
              <InputTo
                id="toMileage"
                type="number"
                name="toMileage"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={toMileage}
                step="0.100"
                placeholder={`To: ${mileageSelect.maxMileage.toLocaleString(
                  'en-IN'
                )}`}
                min={min}
              />
            </DivFormikMileage>
          </LabelFormik>
          <ButtonFormik type="submit">Search</ButtonFormik>
        </FormStyledFormik>
      </Formik>
    </div>
  );
};

export default Filter;
