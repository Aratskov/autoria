import { createSelector } from '@reduxjs/toolkit';

export const selectAllCatalogCar = state => state.catalog.car;
export const selectLikedCars = state => state.catalog.likedCars;
export const selectFilter = state => state.catalog.filter;

export const selectFilterCar = createSelector(
  [selectAllCatalogCar, selectFilter],
  (cars, filter) => {
    if (filter === 'All') return cars;
    return cars.filter(({ make }) => make === filter);
  }
);

export const selectUniqueCar = createSelector([selectAllCatalogCar], cars => {
  const filter = [];
  cars.map(({ make }) => filter.push(make));
  const uniqalCar = ['All', ...new Set(filter)];
  return uniqalCar;
});
