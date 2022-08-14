import { contactsApi } from './apiSlice';
import { configureStore } from '@reduxjs/toolkit';
  import  contactSlice  from './slice';



export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactSlice,
  },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
    ],
});

