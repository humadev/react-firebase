import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Register from './Register';
import {BrowserRouter as Router} from 'react-router-dom';
// Mock Firebase Auth jika perlu

describe('Register Component', () => {
  test('allows user to input email and password', () => {
    render(<Router><Register /></Router>);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
    expect(screen.getByPlaceholderText(/email/i).value).toBe('user@example.com');
    expect(screen.getByPlaceholderText(/password/i).value).toBe('password');
  });

  // Anda bisa menambahkan lebih banyak test untuk menangani submit form, error handling, dll.
});
