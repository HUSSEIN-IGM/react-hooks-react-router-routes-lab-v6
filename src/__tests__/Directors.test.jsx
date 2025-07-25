import React from "react";
import { render, screen } from "@testing-library/react";
import Directors from "../pages/Directors";

test("renders Directors page heading", () => {
  render(<Directors />);
  const heading = screen.getByText(/directors page/i);
  expect(heading).toBeInTheDocument();
});
