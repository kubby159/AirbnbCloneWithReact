import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Airbnb, Inc
        </div>
        <div className="footer-etc">
          <div className="etc">개인정보 처리방침</div>
          <div className="etc">이용약관</div>
          <div className="etc">사이트맵</div>
          <div className="etc">한국의 변경된 환불정책</div>
          <div className="etc">회사 세부정보</div>
        </div>
        <div className="footer-layout"></div>
        <div className="footer-content">
          <div className="footer-language-krw">
            <div className="footer-language">
              <i className="fas fa-globe"></i>
              <a href="#" className="korean">
                한국어(KR)
              </a>
            </div>
            <div className="footer-krw">
              <i className="fas fa-won-sign"></i>
              <a href="#" className="won">
                KRW
              </a>
            </div>

            <a className="footer-community">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="footer-community">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="footer-community">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
