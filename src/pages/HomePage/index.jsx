import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCotacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import { HomeContainerDiv } from './index.styled';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchCotacts());
  }, [dispatch]);

  return (
    <HomeContainerDiv>
      <h3>Add new contacts</h3>
      <ContactForm />

      <div>
        <h2>Contacts</h2>
        {isLoading ? (
          <p>Loading Contacts.....</p>
        ) : (
          <div>
            {items.length > 0 && (
              <div>
                <Filter />
                <ContactList />
              </div>
            )}
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </HomeContainerDiv>
  );
};

export default HomePage;
