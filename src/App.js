import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, SingleMovie } from "./components";
import { Home } from "./screens";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);

  console.log(searchTerm);
  return (
    <BrowserRouter>
      <Navbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              key={searchTerm}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
