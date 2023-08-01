import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <section>
        <Header />
      </section>
      <div className="App fade-in">
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

