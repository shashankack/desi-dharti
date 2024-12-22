import React from "react";
import Pages from "./components/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
    </Router>
  );
};

export default App;
