import { render, screen } from '@testing-library/react';
import { Page } from './Page';

test('renders learn react link', () => {
  render(<Page>page content</Page>);
  const linkElement = screen.getByText('page content');
  expect(linkElement).toBeInTheDocument();
});