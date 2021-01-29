import React, { useState } from "react";
import shortid from "shortid";
import "./styles.css";
// Components
import Light from "./Light";
import { MdAdd } from "react-icons/md";

export default function App() {
  const [lights, setLights] = useState([]);
  
  const addLight = () => {
    const id = shortid.generate(); // DO NOT EDIT THIS LINE
    setLights((light) => [
      ...light,
      {
        id,
        on: false
      }
    ])
  };

  const removeLight = (id) => {
    if(id){
      setLights((lights) => lights.filter((light) => light.id !== id))
    }
  };

  const toggleLight = (id) => {
    if(id){
      setLights((lights) => (
        lights.map((light) => (
          light.id === id ? {...light, on: !light.on } : light
        ))
      ))
    }
  };

  // TODO: implement this function
  const renderLights = () => (
    <div className="lights">{lights.map(({id, on}) => (
      <Light key={id} id={id} on={on} onClickRemove={removeLight} onClickLight={toggleLight}/>
    ))}</div>
  );

  return (
    <div className="app">
      <header>
        <img src="alterclass.png" alt="AlterClass" width="60px" height="60px" />
        <h1>Smart Lighting</h1>
      </header>
      <div className="actions">
        <div className="action" title="Add light" onClick={addLight}>
          <MdAdd />
        </div>
      </div>
      {renderLights()}
    </div>
  );
}
