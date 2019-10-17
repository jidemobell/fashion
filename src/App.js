import React from "react";
import prinmia from "./image/prinmia2.jpeg";
import signature from "./image/signature.png";
import brand from "./image/brand.PNG";
import './responsive.css'
import "./App.css";

function App() {
  return (
    <div className="App flex-row">
      <section className="content">
        <header className="flex-row header">
          <img src={brand} alt="signature" className="brand" />
          <img src={signature} alt="signature" className="signature" />
					<div></div>
        </header>
        <div className="flex-col-centered body">
          <p id="first" className="josefina">
            THIS WEBSITE IS UNDER CONSTRUCTION
          </p>
          <p id="second" className="robo-mono">
            Coming Soon.
          </p>
        </div>
      </section>
      <section className="image">
        <img src={prinmia} alt="background" />
      </section>
    </div>
  );
}

export default App;
