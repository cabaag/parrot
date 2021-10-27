import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Parrot Challenge', () => {
  render(<App />);
  const title = screen.getByText(/Parrot Challenge/i);
  expect(title).toBeInTheDocument();
});
