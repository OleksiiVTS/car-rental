import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const endpoint = '/car-rental';
axios.defaults.baseURL =
  'https://64c3db8d67cfdca3b6605f50.mockapi.io/OleksiiVTS/goit-react-hw-07-phonebook/';

export const getCars = createAsyncThunk(
  'car-rental/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
