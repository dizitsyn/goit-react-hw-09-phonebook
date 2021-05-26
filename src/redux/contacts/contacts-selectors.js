import { createSelector } from '@reduxjs/toolkit';

const filterValue = state => state.contacts.filter;

const getAllcontacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

// const getFilterContact = (state) => {
//   const filter = filterValue(state);
//   const contacts = getAllcontacts(state);
//   return contacts.filter((contact) =>
//     contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//   );
// };

const getFilterContact = createSelector(
  [getAllcontacts, filterValue],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  },
);

export default {
  filterValue,
  getFilterContact,
  getLoading,
};
