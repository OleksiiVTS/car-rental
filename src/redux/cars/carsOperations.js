import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '64c3db8d67cfdca3b6605f50';
const endpoint = '/car-rental';

axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/OleksiiVTS/goit-react-hw-07-phonebook/`;

export const getCars = createAsyncThunk(
  'car-rental/getCars',
  async (_, thunkAPI) => {
    const params = {
      completed: false,
      page: 1,
      limit: 12,
    };
    try {
      const response = await axios.get(endpoint, { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateCars = createAsyncThunk(
  'car-rental/updateCars',
  async (page = 1, thunkAPI) => {
    const params = {
      completed: false,
      page: page,
      limit: 12,
    };
    try {
      const response = await axios.get(endpoint, { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
