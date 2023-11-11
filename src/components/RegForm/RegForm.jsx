import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Link } from 'react-router-dom';

const RegForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('form', form.elements.email.value);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <div className="mt-3">
        <Stack gap={2} className="col-md-5 mx-auto">
          <h1>Registration Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="username"
                aria-describedby="usernameHelp"
                autoComplete="username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                autoComplete="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                autoComplete="current-password"
                required
              />
            </div>
            <Button variant="primary" type="submit">
              Create New Account
            </Button>
          </form>
          <div>
            <h5>Or go to</h5>
            <Link to="/loginPage">Login page</Link>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default RegForm;
