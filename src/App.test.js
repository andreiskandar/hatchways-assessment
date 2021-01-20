import { render, screen } from '@Scoresing-library/react';
import App from './App';

Scores('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
