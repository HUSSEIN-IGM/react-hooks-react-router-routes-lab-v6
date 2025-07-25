// src/__tests__/Movie.test.jsx
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Movie from "../pages/Movie";

describe("Movie Page", () => {
  test("displays the movie ID from the route", () => {
    const testMovieId = "7";

    const { getByText } = render(
      <MemoryRouter initialEntries={[`/movies/${testMovieId}`]}>
        <Routes>
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText(`Movie ID: ${testMovieId}`)).toBeInTheDocument();
  });
});
