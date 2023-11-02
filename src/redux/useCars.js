import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFavoriteCars } from './cars/carsSelectors';
import { getCars } from './cars/carsOperations';
import { setStatusFilter } from './filtersSlice';
import { useCallback } from 'react';

export const useCars = () => {
  const dispatch = useDispatch();

  const isCars = useSelector(selectCars);
  const isFavoriteCars = useSelector(selectFavoriteCars);
  // const valueContacts = useSelector(selectContacts);
  // const valueFilters = useSelector(selectFilters);
  // const visibleContacts = useSelector(selectVisibleContacts);

  const getCarsList = useCallback(() => dispatch(getCars()), [dispatch]);

  const filterContact = updatedTodo => {
    dispatch(setStatusFilter(updatedTodo));
  };

  return {
    isCars,
    isFavoriteCars,
    // valueContacts,
    // valueFilters,
    // visibleContacts,
    filterContact,
    getCarsList,
  };
};
