import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Register from 'Register';
// Mock Firebase Auth jika perlu

describe('Register Component', () => {
  test('renders registration form', () => {
    const { getByText, getByLabelText } = render(<Register />);
    expect(screen.getByText(/register/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('allows user to input email and password', () => {
    const { getByLabelText } = render(<Register />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    expect(screen.getByLabelText(/email/i).value).toBe('user@example.com');
    expect(screen.getByLabelText(/password/i).value).toBe('password');
  });

  // Anda bisa menambahkan lebih banyak test untuk menangani submit form, error handling, dll.
});
