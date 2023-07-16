import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => state.filter((book) => book.title !== action.payload.title),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
