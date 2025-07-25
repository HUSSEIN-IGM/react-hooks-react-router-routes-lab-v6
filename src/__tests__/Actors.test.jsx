import React from "react";
import { render, screen } from "@testing-library/react";
import Actors from "../pages/Actors";

test("renders Actors page heading", () => {
  render(<Actors />);
  const heading = screen.getByText(/actors page/i);
  expect(heading).toBeInTheDocument();
});
