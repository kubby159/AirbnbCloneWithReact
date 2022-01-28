import React from "react";
import reactDom from "react-dom";
import "./scss/style.scss";
import Header from "./component/Header";
import MainImg from "./component/MainImg";
import LocationIntro from "./component/LocationIntro";
import Experience from "./component/Experience";
import Abouthosting from "./component/Abouthosting";
import Company from "./component/Company";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <div className="main-display">
        <Header></Header>
        <MainImg></MainImg>
      </div>
      <LocationIntro></LocationIntro>
      <Experience></Experience>
      <Abouthosting></Abouthosting>
      <Company />
      <Footer />
    </>
  );
}

export default App;
