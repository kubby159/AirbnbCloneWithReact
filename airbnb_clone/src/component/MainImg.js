import React from "react";
import mainImg from "../images/camping.jpeg";

const MainImg = () => {
  return (
    <>
      <div className="main-img-container">
        <img className="main-img" src={mainImg}></img>
        <div className="main-coment-container">
          <span>
            에어비앤비가
            <br />
            여행지를 찾아드릴게요!
          </span>
          <button className="main-search-btn btn">
            <span>유연한 검색</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainImg;
