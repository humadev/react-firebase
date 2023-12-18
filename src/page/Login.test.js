import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from 'Login';

test('renders login form', () => {
  render(<Login />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test('allows entering email and password', () => {
  render(<Login />);
  fireEvent.change(screen.getByType('email'), { target: { value: 'user@example.com' } });
  fireEvent.change(screen.getByType('password'), { target: { value: 'password' } });
  expect(screen.getByType('email').value).toBe('user@example.com');
  expect(screen.getByType('password').value).toBe('password');
});
