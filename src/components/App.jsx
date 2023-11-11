import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegPage from 'pages/RegPage';
import Layout from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute redirectTo="/loginPage" component={<HomePage />} />
            }
          />
          <Route
            path="/loginPage"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="/registration"
            element={<RestrictedRoute redirectTo="/" component={<RegPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
