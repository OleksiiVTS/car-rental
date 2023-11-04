import { createSlice, isAnyOf, isPending, isRejected } from '@reduxjs/toolkit';
import { getCars, updateCars } from './carsOperations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    dataCars: [],
    favoriteCars: [],
    isRefreshing: false,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    addFavoriteCar(state, action) {
      state.favoriteCars.push(action.payload);
    },
    dellFavoriteCar(state, action) {
      const index = state.favoriteCars.findIndex(
        car => car.id === action.payload.id
      );
      state.favoriteCars.splice(index, 1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.dataCars = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(updateCars.fulfilled, (state, action) => {
        state.dataCars.push(...action.payload);
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(isPending(getCars)), state => {
        state.isRefreshing = true;
      })
      .addMatcher(isAnyOf(isRejected(getCars)), (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const { addFavoriteCar, dellFavoriteCar } = carsSlice.actions;
export const carsReducer = persistReducer(
  {
    key: 'ist_cars',
    storage,
    whitelist: ['dataCars', 'favoriteCars'],
  },
  carsSlice.reducer
);
