import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    filterContact,
} from './action';


const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});
const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});