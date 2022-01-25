import React from "react";
import reactDom from "react-dom";
import "./scss/style.scss";
import Header from "./component/Header";
function App() {
  return (
    <div className="layout-1">
      <div className="main-display">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
