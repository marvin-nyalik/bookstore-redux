import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: booksSlice,
  categories: categoriesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
