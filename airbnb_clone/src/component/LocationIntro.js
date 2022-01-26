import React from "react";

const LocationIntro = () => {
  return (
    <>
      <div className="locationintro-container">
        <div className="locationintro-layout"></div>
        <div className="locationintro-coment">
          <span>설레는 다음 여행을 위한 아이디어</span>
        </div>
        <div className="locationintro-city-card">
          <div className="locationintro-city">
            <div className="city-img seoul"></div>
            <div className="city-info">
              <span className="city-name">서울</span>
              <span className="city-distance">2km 거리</span>
            </div>
          </div>
          <div className="locationintro-city">
            <div className="city-img incheon"></div>
            <div className="city-info">
              <span className="city-name">인천</span>
              <span className="city-distance">29km 거리</span>
            </div>
          </div>
          <div className="locationintro-city">
            <div className="city-img daegu"></div>
            <div className="city-info">
              <span className="city-name">대구</span>
              <span className="city-distance">237km 거리</span>
            </div>
          </div>
          <div className="locationintro-city">
            <div className="city-img daejeon"></div>
            <div className="city-info">
              <span className="city-name">대전</span>
              <span className="city-distance">140km 거리</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationIntro;
