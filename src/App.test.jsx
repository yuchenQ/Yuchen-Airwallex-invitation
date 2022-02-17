import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});
