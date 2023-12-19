import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Login from './Login';
import {BrowserRouter as Router} from 'react-router-dom';

test('renders login form', () => {
  render(<Router><Login /></Router>);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test('allows entering email and password', () => {
  render(<Router><Login /></Router>);
  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'user@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
  expect(screen.getByPlaceholderText(/email/i).value).toBe('user@example.com');
  expect(screen.getByPlaceholderText(/password/i).value).toBe('password');
});
