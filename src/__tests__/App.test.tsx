import App from '../App';
import {render} from "@testing-library/react";
import Introduction from "../components/Introduction";


test('Renders main page correctly', () => {
  render(<App />);
  const { baseElement } = render(<Introduction />);
  expect(baseElement).toMatchSnapshot();
});