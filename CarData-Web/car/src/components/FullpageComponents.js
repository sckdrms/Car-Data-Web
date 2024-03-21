import ReactFullpage from "@fullpage/react-fullpage";

function Fullpagecomponents(){

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  return(
    <>
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
    </>
  );
}

export default Fullpagecomponents;