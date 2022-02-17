import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { COMPANY_NAME } from '../../common/constants';

test('Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(`${COMPANY_NAME.toUpperCase()}`);
  expect(linkElement).toBeInTheDocument();
});