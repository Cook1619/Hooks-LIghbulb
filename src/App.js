import React from "react";
import "./styles.css";
// Components
import Light from "./Light";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Smart Lighting</h1>
      </header>
      <Light />
    </div>
  );
}
