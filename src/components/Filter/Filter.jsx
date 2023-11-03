import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Field, Form, useFormik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';

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

  const formik = useFormik({
    initialValues: {
      carBrand: '',
      price: '',
      fromMileage: mileageSelect.minMileage,
      toMileage: mileageSelect.minMileage,
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  const min = parseFloat(mileageSelect.minMileage).toFixed(3);
  const toMileage = formik.values.toMileage
    ? parseFloat(formik.values.toMileage).toFixed(3)
    : '';
  const fromMileage = formik.values.fromMileage
    ? parseFloat(formik.values.fromMileage).toFixed(3)
    : '';

  return (
    <div>
      <h1>Filter</h1>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="carBrand">
            Car bran
            <Field
              id="carBrand"
              as="select"
              name="carBrand"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.carBrand}
            >
              <option value=""></option>
              {markSelect.map(item => (
                <option key={nanoid()} value={item}>
                  {item}
                </option>
              ))}
            </Field>
          </label>
          <label htmlFor="price">
            Price/ 1 hour
            <Field
              id="price"
              as="select"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            >
              <option value=""></option>
              {rentalPriceSelect.map(item => (
                <option key={nanoid()} value={item}>
                  {item}
                </option>
              ))}
            </Field>
          </label>
          <label htmlFor="mileage / km">
            Car mileage / km
            <input
              id="fromMileage"
              type="number"
              name="fromMileage"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={fromMileage}
              step="0.500"
              placeholder={`Min: ${mileageSelect.minMileage.toLocaleString(
                'en-IN'
              )}`}
              min={min}
            />
            <input
              id="toMileage"
              type="number"
              name="toMileage"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={toMileage}
              step="0.500"
              placeholder={`Max: ${mileageSelect.maxMileage.toLocaleString(
                'en-IN'
              )}`}
              min={min}
            />
          </label>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Filter;
