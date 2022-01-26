import React from "react";

const Experience = () => {
  return (
    <>
      <div className="experience-container">
        <div className="experience-coment">
          <span>에어비앤비 체험 둘러보기</span>
        </div>
        <div className="experience-card">
          <div className="experience-left experience-img">
            <div className="experience-title">
              <span>
                여행 중 만나는
                <br /> 이색적인 즐길 거리
              </span>
              <button className="experience-btn">체험</button>
            </div>
          </div>
          <div className="experience-right experience-img">
            <div className="experience-title">
              <span>
                집에서 만나는
                <br /> 다양한 즐길 거리
              </span>
              <button className="experience-btn">온라인 체험</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
