import { useAuth } from 'hooks';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserMenuDiv } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuDiv>
      <p>{user.email}</p>
      <Button
        variant="primary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </UserMenuDiv>
  );
};

export default UserMenu;
