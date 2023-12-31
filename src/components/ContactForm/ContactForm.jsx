import { addContact } from 'redux/contacts/operations';
import { FormDiv, InputDiv } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Button } from 'react-bootstrap';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target[0].value;
    const number = e.target[1].value;

    const alredyHas = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (alredyHas) {
      return alert(`${name} is alredy in contacts`);
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(contact));

    const form = e.target;
    form.reset();
  };

  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <InputDiv>
          <span>Name </span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputDiv>
        <InputDiv>
          <span>Number </span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </InputDiv>

        <Button variant="primary" size="sm" type="submit">
          Add contacts
        </Button>
      </form>
    </FormDiv>
  );
};

export default ContactForm;
