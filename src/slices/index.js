import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from './pageSlice.js';

export default configureStore({
  reducer: {
    pages: pagesReducer,
  },
});
