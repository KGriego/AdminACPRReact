import React from "react";
import { fireEvent, render, getByText } from "react-testing-library";
import Navbar from "./index";

it("renders nav bare", () => {
  const { getByText } = render(<Navbar />);
  expect(getByText("AdminACPR")).toBeInTheDocument();
});
