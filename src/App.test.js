import { render, screen } from '@testing-library/react';
import App from './App';


test("renders without crash", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});