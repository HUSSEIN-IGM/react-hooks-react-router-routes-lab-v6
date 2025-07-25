import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

// Test for Home page
test("renders Home page when visiting /", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});

// Test for Actors page
test("renders Actors page when visiting /actors", () => {
  render(
    <MemoryRouter initialEntries={["/actors"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Actors Page/i)).toBeInTheDocument();
});

// Test for Directors page
test("renders Directors page when visiting /directors", () => {
  render(
    <MemoryRouter initialEntries={["/directors"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Directors Page/i)).toBeInTheDocument();
});
