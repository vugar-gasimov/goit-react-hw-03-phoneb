import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import {
  PhoneBookInputContainer,
  PhoneBookInputLabel,
  PhoneBookInput,
  PhoneBookButton,
} from './ContactBook.Styled';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
    isNameValid: false,
    isNumberValid: false,
  };
  handleNewContacts = e => {
    e.preventDefault();
    if (this.state.isNameValid && this.state.isNumberValid) {
      const { name, number } = this.state;
      if (this.props.isNameExists(name)) {
        alert('Sorry you already have this name in the phonebook. 😅');
      } else if (this.props.isNumberExists(number)) {
        alert('Sorry you already have this number in the phonebook.😉');
      } else {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        this.props.addContact(newContact);
        this.setState({
          name: '',
          number: '',
          isNameValid: false,
          isNumberValid: false,
        });
      }
    }
  };
  handleNewName = e => {
    const name = e.target.value.trim();
    const isNameValid =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);
    this.setState({
      name,
      isNameValid,
    });
  };
  handleNewNumber = e => {
    const number = e.target.value.trim();
    const isNumberValid =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        number
      );
    this.setState({
      number,
      isNumberValid,
    });
  };
  handleFilterInput = e => {
    console.log(e.target.value);
    this.setState({ filter: e.target.value });
  };

  render() {
    const { name, number, isNameValid, isNumberValid } = this.state;

    return (
      <PhoneBookInputContainer>
        <PhoneBookInputLabel>Name: </PhoneBookInputLabel>
        <PhoneBookInput
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          placeholder="Add new name..."
          onChange={this.handleNewName}
        />
        <PhoneBookInputLabel>Number: </PhoneBookInputLabel>
        <PhoneBookInput
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          placeholder="Add new number..."
          onChange={this.handleNewNumber}
        />
        <PhoneBookButton
          onClick={this.handleNewContacts}
          disabled={!isNameValid || !isNumberValid}
        >
          Add contact
        </PhoneBookButton>
      </PhoneBookInputContainer>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  isNameExists: PropTypes.func.isRequired,
  isNumberExists: PropTypes.func.isRequired,
};
