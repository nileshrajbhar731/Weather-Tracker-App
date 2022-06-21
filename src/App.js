import React, { Component } from "react";
import History from "./pages/History";
import Testing from "./pages/Testing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/"  element={<Testing />} />
            <Route path="history" element={<History />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
