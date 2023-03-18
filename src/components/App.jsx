import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsSection from './ListAddContact/ListAddContact';
import { DataContainer } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState();
  const [filter, setFilter] = useState('');
  const [visibleContacts, setVisibleContacts] = useState([]);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(contacts)) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const formSubmit = ({ name, number }) => {
    if ((contacts || []).find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prevState => {
      return [...prevState, { id: nanoid(), name, number }];
    });
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  useEffect(() => {
    const normalizedFilter = filter.toLowerCase();
    setVisibleContacts(
      (contacts || []).filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  }, [contacts, filter]);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <DataContainer>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsSection
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </DataContainer>
  );
}
