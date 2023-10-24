import React from 'react';
import { PhoneBookContactItem } from './ContactBook.Styled';
import PropTypes from 'prop-types';

export function ContactListItem({ contact }) {
  return (
    <PhoneBookContactItem>
      {contact.name}: {contact.number}
    </PhoneBookContactItem>
  );
}
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
