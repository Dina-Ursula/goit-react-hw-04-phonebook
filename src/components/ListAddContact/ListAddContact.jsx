import React from 'react';
import PropTypes from 'prop-types';
import {
  ListContacts,
  NameData,
  NameNumber,
  ButtonDelete,
} from './ListAddContact.styled';

const ContactsSection = ({ contacts, onDeleteContact }) => {
  return (
    <ListContacts>
      {contacts.map(({ name, id, number }) => (
        <NameData key={id}>
          <NameNumber>
            {name}: {number}
          </NameNumber>
          <ButtonDelete onClick={() => onDeleteContact(id)}>
            delete
          </ButtonDelete>
        </NameData>
      ))}
    </ListContacts>
  );
};

ContactsSection.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsSection;
