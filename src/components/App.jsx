import React from 'react';
import { ContactForm } from './Contact-Book/ContactForm';
import { AppContainer, TitleContainer, ContentContainer } from './App.Styled';
import { Filter } from './Contact-Book/Filter';
import { ContactList } from './Contact-Book/ContactList';
import {
  PhoneBookContainer,
  PhoneBookTitle,
  PhoneBookContactTitle,
} from './Contact-Book/ContactBook.Styled';
import { getFilteredData } from 'helpers/getFilteredData';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Vugar Gasimov', number: '684-02-29' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Rosie Simpson', number: '459-12-56' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  isNameExists = name => {
    return this.state.contacts.some(contact => contact.name === name);
  };
  isNumberExists = number => {
    return this.state.contacts.some(contact => contact.number === number);
  };
  handleContactDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredData = getFilteredData({ contacts, filter });
    return (
      <AppContainer>
        <TitleContainer>React homework template</TitleContainer>

        <ContentContainer>
          <PhoneBookContainer>
            <PhoneBookTitle>PhoneBook</PhoneBookTitle>

            <ContactForm
              addContact={this.addContact}
              isNameExists={this.isNameExists}
              isNumberExists={this.isNumberExists}
            />

            <PhoneBookContactTitle>Contacts</PhoneBookContactTitle>

            <Filter setFilter={this.handleFilterChange} filter={filter} />

            <ContactList
              contacts={filteredData}
              filter={filter}
              onDeleteContact={this.handleContactDelete}
            />
          </PhoneBookContainer>
        </ContentContainer>
      </AppContainer>
    );
  }
}
