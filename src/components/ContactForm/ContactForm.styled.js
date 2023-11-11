import { styled } from 'styled-components';

export const InputDiv = styled('div')(() => {
  return {
    marginBottom: '20px',
    display: 'flex',
    padding: '5px',
    margin: '0 auto',
    width: '400px',
    justifyContent: 'space-between',
  };
});

export const FormDiv = styled('div')(() => {
  return {
    border: 'solid gray 2px',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '20px',
  };
});
