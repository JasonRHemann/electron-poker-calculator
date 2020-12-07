import React from "react";
import HandReader from "./screenReader/HandReader";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HandReader />
      </header>
    </div>
  );
}

export default App;
