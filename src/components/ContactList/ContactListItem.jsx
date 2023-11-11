import { Button } from 'react-bootstrap';
import { LiItem } from './ContactList.styled';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <LiItem>
      <span>{name} </span>
      <span> {number} </span>
      <Button type="button" variant="primary" onClick={() => onClick(id)}>
        Delete
      </Button>
    </LiItem>
  );
};

export default ContactListItem;
