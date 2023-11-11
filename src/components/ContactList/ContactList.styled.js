import { styled } from 'styled-components';

export const LiItem = styled('li')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',
  };
});

export const List = styled('ul')(() => {
  return {
    width: '400px',
  };
});
