import { render, screen } from '@testing-library/react';
import { Content } from './Content';

test('Content', () => {
  render(<Content />);

  expect(screen.getByText(/A better way/i)).toBeInTheDocument();
  expect(screen.getByText(/to enjoy every day/i)).toBeInTheDocument();
  expect(screen.getByText('Be the first to know when we launch.')).toBeInTheDocument();
});