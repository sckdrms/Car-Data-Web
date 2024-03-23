// App.jsx
import React from "react";
import ReactDOM from "react-dom/client";

// import {Navbar, Container, Nav} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet, Router} from 'react-router-dom';

import Fullpagecomponents from "./components/FullpageComponents";
import Navbar from "./components/NavbarComponents";

import { Home, Product, System, Introduce, Contact } from './components/Pages'; // 각 페이지에 맞는 컴포넌트를 생성해야 합니다

import "../src/css/styles.css";
import "../src/index.css";

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
// React 18 이상에서 createRoot를 사용하는 방법
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  ReactDOM.createRoot(rootElement).render(<App />);
}
