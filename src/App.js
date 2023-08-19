import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, SingleMovie } from "./components";
import { Home } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
