import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import "./styles.css";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;


function App() {



  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  return (
    <div className="App">

      <ReactFullpage
        debug // Debug logging
        navigation
        anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
        sectionSelector=".section"
        slidesNavigation={true} // Enable navigation bullets for slides
        onLeave={onLeave}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section" id="page1"><p>1 page</p></div>
            <div className="section">
              <div className="slide" id="page2-1"><p>page 2-1</p></div>
              <div className="slide"><p>page 2-2</p></div>
              <div className="slide"><p>page 2-3</p></div>
            </div>
            <div className="section" id="page3-1"><p>3 page</p></div>
            <div className="section"><p>4 page</p></div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
