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
} from './contacts-actions';

import axios from 'axios';
//axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('contacts', contact)
    .then(response => dispatch(addContactSuccess(response.data)))
    .catch(error => dispatch(addContactError(error.message)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete('contacts/' + id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export const contactFetch = () => dispatch => {
  dispatch(getContactRequest());
  axios
    .get('contacts')
    .then(response => dispatch(getContactSuccess(response.data)))
    .catch(error => dispatch(getContactError(error.message)));
};
