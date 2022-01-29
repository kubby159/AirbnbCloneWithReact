import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handlerBottomBorder() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="main-header">
        <div className="main-top">
          <div className="main-logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqvA3bUketmRxXEro0V3yYzjjn92laHNYVg&usqp=CAU"
              alt="logo"
            ></img>
          </div>
          <ul className="main-menu">
            <li className="main-menu-lodging" onClick={handlerBottomBorder}>
              숙소
            </li>
            <li
              className="main-menu-experience apple"
              onClick={handlerBottomBorder}
            >
              체험
            </li>
            <li className="main-menu-online-experience">온라인 체험</li>
          </ul>
          <ul className="main-profile">
            <li className="main-menu-host">
              <span>호스트 되기</span>
            </li>
            <li className="main-menu-earth">
              <i class="fas fa-globe-americas"></i>
            </li>
            <li className="main-menu-profile-photo">
              <div className="hambuger">
                <i class="fas fa-bars"></i>
              </div>
              <div className="profile-photo">
                <i class="fas fa-user-circle"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="main-bottom">
          <div className="main-search">
            <div className="main-location silhouette">
              <span>위치</span>
              <input placeholder="어디로 여행가세요?" />
              <div className="layout"></div>
            </div>
            <div className="main-check-in silhouette">
              <span>체크인</span>
              <span className="input-day">날짜 입력</span>
              <div className="layout"></div>
            </div>
            <div className="main-check-out silhouette">
              <span>체크아웃</span>
              <span className="input-day">날짜 입력</span>
              <div className="layout"></div>
            </div>
            <div className="main-guest silhouette">
              <div>
                <span>인원</span>
                <span className="input-day">게스트 추가</span>
              </div>
            </div>
            <div className="main-search-icon silhouette">
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
