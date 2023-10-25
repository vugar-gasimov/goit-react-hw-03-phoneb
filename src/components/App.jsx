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
import { toast } from 'react-toastify';
import { Phone, BookUser } from 'lucide-react';
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

  componentDidMount() {
    toast.success('Component was Mount');
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
    }
    if (prevState.filter !== this.state.filter) {
      window.localStorage.setItem('filter', JSON.stringify(this.state.filter));
    }
  }

  handleFilterChange = filter => {
    this.setState({ filter });
    window.localStorage.setItem('filter', JSON.stringify(this.state.filter));
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
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
            <PhoneBookTitle>
              PhoneBook <Phone strokeWidth={1.5} />
            </PhoneBookTitle>

            <ContactForm
              addContact={this.addContact}
              isNameExists={this.isNameExists}
              isNumberExists={this.isNumberExists}
            />

            <PhoneBookContactTitle>
              Contacts <BookUser strokeWidth={1.5} />
            </PhoneBookContactTitle>

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
