import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectFavoriteCars,
  selectRefreshing,
} from './cars/carsSelectors';
import { getCars, updateCars } from './cars/carsOperations';
import { addDataFilter, setStatusFilter } from './filters/filtersSlice';
import { useCallback } from 'react';
import { addFavoriteCar, dellFavoriteCar } from './cars/carsSlice';
import {
  selectVisibleCars,
  selectVisibleFavoriteCars,
} from './filters/filterSelectors';

export const useCars = () => {
  const dispatch = useDispatch();

  const isCars = useSelector(selectCars);
  const isFavoriteCars = useSelector(selectFavoriteCars);
  const isVisibleCars = useSelector(selectVisibleCars);
  const isVisibleFavoriteCars = useSelector(selectVisibleFavoriteCars);
  const isRefreshing = useSelector(selectRefreshing);

  const getCarsList = useCallback(() => dispatch(getCars()), [dispatch]);
  const updateCarsList = page => {
    dispatch(updateCars(page));
  };

  const addCarToFavorite = favoriteCar => {
    dispatch(addFavoriteCar(favoriteCar));
  };
  const dellCarFromFavorite = favoriteCar => {
    dispatch(dellFavoriteCar(favoriteCar));
  };
  const addDataToFilter = dataFilter => {
    dispatch(addDataFilter(dataFilter));
  };

  const filterContact = updatedTodo => {
    dispatch(setStatusFilter(updatedTodo));
  };

  return {
    isCars,
    isFavoriteCars,
    isVisibleCars,
    isVisibleFavoriteCars,
    isRefreshing,
    addDataToFilter,
    addCarToFavorite,
    dellCarFromFavorite,
    filterContact,
    updateCarsList,
    getCarsList,
  };
};
