import React from "react";
import reactDom from "react-dom";
import "./scss/style.scss";
import Header from "./component/Header";
import MainImg from "./component/MainImg";

function App() {
  return (
    <>
      <div className="main-display">
        <Header></Header>
        <MainImg></MainImg>
      </div>
    </>
  );
}

export default App;
