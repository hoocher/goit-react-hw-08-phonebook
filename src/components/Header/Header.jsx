import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';

import React from 'react';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>{isLoggedIn && <UserMenu />}</header>
    </>
  );
};

export default Header;
