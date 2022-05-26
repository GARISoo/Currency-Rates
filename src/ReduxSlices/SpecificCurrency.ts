/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../store';

const ChosenCurrencySlice = createSlice({
  initialState: {
    chosenCurrency: '',
  },

  name: 'chosenCurrency',

  reducers: {
    newChosenCurrency: (state, action) => {
      state.chosenCurrency = action.payload;
    },
  },
});

export const { newChosenCurrency } = ChosenCurrencySlice.actions;

export default ChosenCurrencySlice.reducer;
