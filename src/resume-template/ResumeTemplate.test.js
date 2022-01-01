import { render, screen } from '@testing-library/react';
import ResumeTemplate from './ResumeTemplate';

test('renders learn react link', () => {
  render(<ResumeTemplate />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
