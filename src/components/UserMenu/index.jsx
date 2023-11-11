import { useAuth } from 'hooks';
import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);
  return (
    <Stack direction="horizontal" gap={2}>
      <p>{user.email}</p>
      <Button
        variant="primary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Stack>
  );
};

export default UserMenu;
