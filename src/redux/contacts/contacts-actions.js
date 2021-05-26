import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('state/fetchContactsRequest');
const fetchContactSuccess = createAction('state/fetchContactsSuccess');
const fetchContactError = createAction('state/fetchContactsError');

const addContactRequest = createAction('phoneBook/addContactsRequest');
const addContactSuccess = createAction('phoneBook/addContactsSuccess');
const addContactError = createAction('phoneBook/addContactsError');

const delContactRequest = createAction('phoneBook/delContactsRequest');
const delContactSuccess = createAction('phoneBook/delContactsSuccess');
const delContactError = createAction('phoneBook/delContactsError');

const filterContact = createAction('phoneBook/filter');

export default {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  filterContact,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
};
