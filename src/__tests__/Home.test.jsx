// src/__tests__/Home.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home"; // or wherever your Home component is located

test("renders Home page heading", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Adjust this line based on your real heading text
  expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
});
