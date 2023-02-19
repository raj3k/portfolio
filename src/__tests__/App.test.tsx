import App from '../App';
import {render, screen} from "@testing-library/react";


test('Renders main page correctly', () => {
  render(<App />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
});