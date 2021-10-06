import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutAnimation from "../AboutAnimation";


it("renders", () => {
  const { asFragment } = render(<AboutAnimation  />);
  expect(asFragment()).toMatchSnapshot();
});