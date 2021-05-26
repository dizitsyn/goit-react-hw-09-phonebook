import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import contactSelectors from '../../redux/contacts/contacts-selectors';

export default function CobtactFilter() {
  const value = useSelector(contactSelectors.filterValue);
  const dispatch = useDispatch();

  const onChange = e => dispatch(contactActions.filterContact(e.target.value));

  return (
    <label>
      find
      <input value={value} onChange={onChange} />
    </label>
  );
}
