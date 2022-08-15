import { contactsApi } from './apiSlice';
import { configureStore } from '@reduxjs/toolkit';
  import  filterSlice  from './slice';



export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice,
  },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
    ],
});

