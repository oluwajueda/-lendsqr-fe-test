import React from "react";
import lendsqr from "../photos/lendsqr.png";
import union from "../photos/Union.png";
import avatar from "../photos/pablo-signin.svg";

const LoginPage = () => {
  return (
    <div className="login_page">
      <div className="login_div1">
        <div className="logo-icon">
          <img className="union_logo" src={union} alt="" />
          <img className="lendsqr_logo" src={lendsqr} alt="" />
        </div>
        <div className="center_avatar">
          <img className="login_avatar" src={avatar} alt="" />
        </div>
      </div>

      <div className="login_div2">
        <div className="login_div2_center">
          <h1 className="login_h1">Welcome!</h1>
          <p className="login_p">Enter details to login</p>
          <form>
            <input className="login_input" placeholder="Email" />
            <input className="login_input" placeholder="Password" />
            <h6>FORGOT PASSWORD</h6>
            <button className="login_button">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
