import { styled } from 'styled-components';

export const HomeContainerDiv = styled('div')(() => {
  return {
    textAlign: 'center',
    width: '500px',
    margin: '0 auto',
    padding: '10px',
  };
});

export const ContactsDiv = styled('div')(() => {
  return {
    border: 'solid gray 2px',
    borderRadius: '4px',
    padding: '20px',
  };
});
