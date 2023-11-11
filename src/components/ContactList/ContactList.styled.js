import { styled } from 'styled-components';

export const LiItem = styled('li')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  };
});

export const List = styled('ul')(() => {
  return {
    width: '400px',
    margin: '0 auto',
    padding: '0',
  };
});
