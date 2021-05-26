import { connect } from 'react-redux';
import ContactList from './ContactList';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilterContact(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsOperations.delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
