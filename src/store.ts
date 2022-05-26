import { configureStore } from '@reduxjs/toolkit';
import { currencyApi } from './ReduxSlices/CurrencySlice';
import SpecificCurrency from './ReduxSlices/SpecificCurrency';

const store = configureStore({
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(currencyApi.middleware),
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    chosenCurr: SpecificCurrency,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
