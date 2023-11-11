import { ContainerDiv } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCotacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchCotacts());
  }, [dispatch]);

  return (
    <ContainerDiv>
      <h1>Phonebook</h1>
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
    </ContainerDiv>
  );
};

export default HomePage;
