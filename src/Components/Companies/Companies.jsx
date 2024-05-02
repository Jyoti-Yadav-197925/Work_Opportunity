
import React from "react";
import "./Companies.css";


function Companies() {
  const row1 = [
    "https://1000logos.net/wp-content/uploads/2021/05/Advan-logo.png",
    "https://1000logos.net/wp-content/uploads/2016/10/Canon-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/12/Casio-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Fuji-Electric-logo.png",
    "https://1000logos.net/wp-content/uploads/2018/02/Epson-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/12/Hitachi-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/12/Fujitsu-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/04/Issey-Miyake-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/OKI-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Brother-logo.png",
    "https://1000logos.net/wp-content/uploads/2023/03/Astellas-logo.png"
  ];

  const row2 = [
    "https://1000logos.net/wp-content/uploads/2017/12/Sanyo-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/12/Kingdom-Hearts-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/12/Pioneer-logo.png",
    "https://1000logos.net/wp-content/uploads/2022/12/Panasonic-logo.png",
    "https://1000logos.net/wp-content/uploads/2018/10/Orient-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Nakamichi-logo.png",
    "https://1000logos.net/wp-content/uploads/2020/08/Mitsubishi-Electric-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/08/Daikin-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Toyo-Tires-logo.png"
  ];

  return (
    <div id = "Companies" className="AppContainer">
      <div className="Wrapper">
        <div className="Text">With Great Companies</div>
        <div className="Note">
          Our clients have gotten offers from awesome companies.
        </div>
        <div className="Marquee">
          <div className="MarqueeGroup">
            {row1.map((el, index) => (
              <div className="ImageGroup" key={index}>
                <img className="Image" src={el} alt={`logo-${index}`} />
              </div>
            ))}
          </div>

          <div className="MarqueeGroup">
            {row1.map((el, index) => (
              <div className="ImageGroup" key={index}>
                <img className="Image" src={el} alt={`logo-${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="Marquee">
          <div className="MarqueeGroup2">
          {row2.map((el, index) => (
              <div className="ImageGroup" key={index}>
                <img className="Image" src={el} alt={`logo-${index}`} />
              </div>
            ))}
          </div>

          <div className="MarqueeGroup2">
          {row2.map((el, index) => (
              <div className="ImageGroup" key={index}>
                <img className="Image" src={el} alt={`logo-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
