import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import ContactFilter from '../components/ContactFilter';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactsView() {
  const dispatch = useDispatch();

  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div style={barStyles}>
        <ContactFilter />
        <ContactForm />

        {isLoadingContacts && <h1>Ща все будет...</h1>}
      </div>

      <ContactList />
    </Container>
  );
}
