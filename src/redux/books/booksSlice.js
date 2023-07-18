import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'NkLjzxrLqkaakBCw8icH';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
export const getBooksUrl = `${baseUrl}/${appId}/books`;

export const fetchBooks = createAsyncThunk('books/fetch',
  async () => {
    const books = await axios.get(getBooksUrl);
    return books.data;
  });

export const addBook = createAsyncThunk('books/add', async ({
  title, author, category, itemId,
}) => {
  const data = {
    title,
    author,
    category,
    item_id: itemId,
  };
  await axios.post(getBooksUrl, data);
});

export const deleteBook = createAsyncThunk('books/delete', async ({ bookId }) => {
  await axios.delete(getBooksUrl.concat('/') + bookId);
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer } = booksSlice;
