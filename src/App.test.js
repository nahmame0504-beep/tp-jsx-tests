import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre du TP', () => {
  render(<App />);
  expect(screen.getByText('TP JSX et Composition')).toBeInTheDocument();
});