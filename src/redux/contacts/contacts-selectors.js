//import { createSelector } from "@reduxjs/toolkit"

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;
