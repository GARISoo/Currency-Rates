import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/' }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query<any, void>({
      query: () => 'latest/currencies.json',
    }),
    getBaseCurrValues: builder.query<any, string>({
      query: (token) => `latest/currencies/${token}.json`,
    }),
    getComparison: builder.query<any, string>({
      query: (tokens) => `latest/currencies/${tokens}.json`,
    }),
    getSpecificDateData: builder.query<any, string>({
      query: (info) => `${info}.json`,
    }),
  }),
});

export const {
  useGetAllCurrenciesQuery, useGetBaseCurrValuesQuery, useGetComparisonQuery, useGetSpecificDateDataQuery,
} = currencyApi;
