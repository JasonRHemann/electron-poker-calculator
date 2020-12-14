import React from "react";
import SuitReader from "./screenReader/SuitReader";
import CardReader from "./screenReader/CardReader";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CardReader />
        <SuitReader />
      </header>
    </div>
  );
}

export default App;
