import React from 'react';
import PropTypes from 'prop-types';
import {
  PhoneBookInputContainer,
  PhoneBookInputLabel,
  PhoneBookInput,
} from './ContactBook.Styled';
export const Filter = ({ setFilter, filter }) => {
  const handleFilterInput = e => {
    const filter = e.target.value;
    setFilter(filter);
  };
  return (
    <PhoneBookInputContainer>
      <PhoneBookInputLabel>You can filter contacts here: </PhoneBookInputLabel>
      <PhoneBookInput
        value={filter}
        placeholder="Feel free to filter contacts..."
        onChange={handleFilterInput}
        name="filter"
        title="Filtering contact list by name or number."
      />
    </PhoneBookInputContainer>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
