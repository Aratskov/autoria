import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64c51f32c853c26efada849f.mockapi.io';

export const getCatalogCar = createAsyncThunk(
  'catalog/all',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/car');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addLike = createAction('catalog/addLike', car => {
  return { payload: car };
});

export const removeLike = createAction('catalog/removeLike', carId => {
  return { payload: carId.id };
});

export const changeFilter = createAction('catalog/changeFilter', filter => {
  console.log(filter)
  return { payload: filter };
});