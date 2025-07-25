import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="/directors" element={<Directors />} />
    </Routes>
  );
}

export default App;
