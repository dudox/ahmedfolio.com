import { render } from '@testing-library/react';
import AboutAnimation from '../AboutAnimation';

test('renders learn react link', () => {
  render(<AboutAnimation />);
  expect(<AboutAnimation />).toMatchSnapshot();
});