import React from "react";
import ReactDOM from "react-dom";

import {Navbar, Container, Nav} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import Fullpagecomponents from "../src/components/FullpageComponents"

import "./styles.css";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;


function App() {





  return (
    <div className="App">
      <Fullpagecomponents>
        
      </Fullpagecomponents>

    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
