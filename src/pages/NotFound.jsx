import React from "react";
import "../assets/styles/NotFound.css";
const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
        <div className="error_wrapper">
          <div className="header">
            <div className="header_left">
              <a href="/">
                <img src="https://cdn.dsmcdn.com/mrktng/seo/22404/ty_web_300x102.svg" />
              </a>
            </div>
            <div className="header_right">
              <div>
                <img src="https://cdn.dsmcdn.com/web/production/world-web-404.png" />
              </div>
              <div className="box_astrounat">
                <img src="https://cdn.dsmcdn.com/web/production/yuri-web-404.png" />
              </div>
            </div>
          </div>

          <div className="clear"></div>

          <div className="typography">
            <div className="bigtypography">
              <a href="/">
                <h1>404</h1>
              </a>
            </div>
            <div className="smalltypography">
              <p>
                Aradığın içeriğe şu an ulaşılamıyor.
                <br /> Hemen ayrılma, aşağıdakilere göz atmak ister misin?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
