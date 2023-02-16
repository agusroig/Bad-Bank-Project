import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import CreateAccount from "./components/createaccount";
import App from "./App";

// test('test deposit', () => {
//   render(<App />);

//   const input = screen.getByTestId('deposit');
//   const button = screen.getByText('Submit Deposit');

//   userEvent.type(input, "100");
//   userEvent.click(button);

//   // screen.getByText("100");
//   screen.getByText('Submit Deposit');

// });

// import { render, screen } from '@testing-library/react';
// import App from './App';
// import userEvent from '@testing-library/user-event';

test('account name', () => {
  render(<App />);
  const name = screen.getByRole('textbox', {name: /name/i});
  const email = screen.getByRole('textbox', {name: /email/i});
  const password = screen.getByRole('textbox', {name: /password/i});
  const button = screen.getByRole('button', {name: /Create Account/i})
  userEvent.type(name,"nombre");
  userEvent.type(email,"a@a.com");
  userEvent.type(password,"secret");
  userEvent.click(button);
  expect(name).toHaveValue("nombre");
  expect(email).toHaveValue("a@a.com");
  expect(password).toHaveValue("secret");
});
