import { render, screen } from '@testing-library/react';
import App from './App';

test('renders clinic name in header', () => {
  render(<App />);
  const brandElement = screen.getByText(/Uniderma/i);
  expect(brandElement).toBeInTheDocument();
});
