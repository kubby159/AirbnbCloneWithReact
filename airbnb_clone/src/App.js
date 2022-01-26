import React from "react";
import reactDom from "react-dom";
import "./scss/style.scss";
import Header from "./component/Header";
import MainImg from "./component/MainImg";
import LocationIntro from "./component/LocationIntro";
function App() {
  return (
    <>
      <div className="main-display">
        <Header></Header>
        <MainImg></MainImg>
      </div>
      <LocationIntro></LocationIntro>
    </>
  );
}

export default App;
