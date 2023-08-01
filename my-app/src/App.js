import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";
import Landing from "./pages/Landing";

// component imports
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
