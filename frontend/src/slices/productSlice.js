import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
        query: (PRODUCT_ID) => ({
          url: `${PRODUCTS_URL}/${PRODUCT_ID}`,
        }),
        keepUnusedDataFor: 5,
    }),
    // getProductDetails: builder.query({
    //   query: (productId) => ({
    //     url: `${PRODUCTS_URL}/${productId}`,
    //   }),
    //   keepUnusedDataFor: 5,
    // }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productSlice;