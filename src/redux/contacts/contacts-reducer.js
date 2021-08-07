import { combineReducers } from 'redux';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  getContactError,
  getContactRequest,
  getContactSuccess,
  resetFilter,
} from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';
//import initialContacts from "../../data/contacts.json"

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [getContactSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [resetFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [getContactRequest]: () => true,
  [getContactError]: () => false,
  [getContactSuccess]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
