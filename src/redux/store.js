import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer } from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: reducer,
  categories: categoriesSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
