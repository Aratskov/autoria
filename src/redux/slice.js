import { createSlice } from '@reduxjs/toolkit';
import { getCatalogCar } from './operation';

const initialState = {
  car: [],
  likedCars: [],
  filter:"All",
  isLoading: false,
  error: null,
};

const sliceCatalogCar = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addLike: (state, action) => {
      const car = action.payload;
      if (!state.likedCars.some(likedCar => likedCar.id === car.id)) {
        state.likedCars.push(car);
      }
    },
    removeLike: (state, action) => {
      const carId = action.payload;
      state.likedCars = state.likedCars.filter(
        likedCar => likedCar.id !== carId
      );
    },
    changeFilter: (state, {payload}) => {
      state.filter=payload
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCatalogCar.fulfilled, (state, { payload }) => {
        state.car = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        action =>
          action.type.startsWith('catalog') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('catalog') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { addLike, removeLike,changeFilter } = sliceCatalogCar.actions;
export default sliceCatalogCar.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { getCatalogCar } from './operation';

// const initialState = {
//   car: [],
//   isLoading: false,
//   error: null,
// };

// const sliceCatalogCar = createSlice({
//   name: 'catalog',
//   initialState,
//   extraReducers: build =>
//     build
//           .addCase(getCatalogCar.fulfilled, (state, { payload }) => {
//               state.car = payload
//               state.isLoading = false;
//               state.error = null

//           })
//       .addMatcher(
//         action =>
//           action.type.startsWith('catalog') && action.type.endsWith('/pending'),
//         state => {
//           state.isLoading = true;
//         }
//       )
//       .addMatcher(
//         action =>
//           action.type.startsWith('catalog') &&
//           action.type.endsWith('/rejected'),
//         (state, { payload }) => {
//           state.isLoading = false;
//           state.error = payload;
//         }
//       ),
// });

// export default sliceCatalogCar.reducer
