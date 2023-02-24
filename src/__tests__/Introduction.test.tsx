import Introduction from "../components/Introduction";
import {render, screen} from "@testing-library/react";


test('Renders Introduction component correctly', () => {
  render(<Introduction />);
  expect(screen.getByText(/Maciej/)).toBeInTheDocument();
  expect(screen.getByText("Software Engineer & Web Developer")).toBeInTheDocument();
});