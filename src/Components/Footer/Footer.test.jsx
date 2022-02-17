import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText('Created by YuchenQ');
  expect(linkElement).toBeInTheDocument();
});