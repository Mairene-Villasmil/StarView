import { render, screen } from '@testing-library/react';
import EasyMovie from './EasyMovie';

test('renders learn react link', () => {
  render(<EasyMovie />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
