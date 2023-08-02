import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slice';
import loaderReducer from './Loader/loaderSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistCatalogConfig = {
  key: 'catalog',
  storage,
  whitelist: ['likedCars','filter'],
};

const persistedCatalogReducer = persistReducer(
  persistCatalogConfig,
  catalogReducer
);

export const store = configureStore({
  reducer: {
    catalog: persistedCatalogReducer,
    isLoading: loaderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
