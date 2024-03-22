import React from "react";
import ReactDOM from "react-dom";

// import {Navbar, Container, Nav} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import Fullpagecomponents from "./components/FullpageComponents"
import Navbar from "./components/NavbarComponents"

import "../src/css/styles.css";
import "../src/index.css"

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Fullpagecomponents/>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
