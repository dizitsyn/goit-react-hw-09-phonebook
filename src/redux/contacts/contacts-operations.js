import axios from 'axios';
import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error.message));
  }
};

const addContact = ({ name, number }) => dispatch => {
  const contact = { name, number };

  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error.message)));
};

const delContact = contactId => dispatch => {
  dispatch(contactsActions.delContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactsActions.delContactSuccess(contactId)))
    .catch(error => dispatch(contactsActions.delContactError(error.message)));
};

export default { addContact, delContact, fetchContacts };
