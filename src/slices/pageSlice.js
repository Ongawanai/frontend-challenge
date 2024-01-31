import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const pagesAdapter = createEntityAdapter();

const initialState = pagesAdapter.getInitialState({
  currPage: 'allCats',
});

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    updatePage: (state, { payload }) => {
      state.currPage = payload;
    },
  },
});

export const { updatePage } = pagesSlice.actions;
export default pagesSlice.reducer;
