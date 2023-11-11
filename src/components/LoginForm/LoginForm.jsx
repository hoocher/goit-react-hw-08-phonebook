import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
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
            <div>
              <Button className="mb-3" variant="primary" type="submit">
                Login!
              </Button>
            </div>
          </form>
          <div>
            <p>Don't have an account yet?</p>
            <Link to="/registration">Register new User</Link>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default LoginForm;
