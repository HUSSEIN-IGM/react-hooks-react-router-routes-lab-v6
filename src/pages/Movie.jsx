import React from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  return (
    <div>
      <h1>Movie ID: {id}</h1>
    </div>
  );
}

export default Movie;
