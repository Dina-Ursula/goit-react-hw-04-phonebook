import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormSubmit, InputContainer, Input, ButtonSubmit } from './Form.styled';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const handleNameChange = evt => {
  //   setName(evt.target.value);
  // };

  // const handleNumberChange = evt => {
  //   setNumber(evt.target.value);
  // };
  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormSubmit onSubmit={handleSubmit}>
      <InputContainer>
        Name
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputContainer>
      <InputContainer>
        Number
        <Input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputContainer>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </FormSubmit>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
