import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import lendsqr from "../photos/lendsqr.png";
import union from "../photos/Union.png";
import avatar from "../photos/pablo-signin.svg";
import { store } from "../store";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<null | string | {}>(null);
  const navigate = useNavigate();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!email || !password) return;
    setUser({ email });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  });

  return (
    <div className="login">
      <div className="login_div1">
        <div className="login_logo_icon">
          <img className="login_union_logo" src={union} alt="" />
          <img className="login_lendsqr_logo" src={lendsqr} alt="" />
        </div>
        <div className="login_center_avatar">
          <img className="login_avatar" src={avatar} alt="" />
        </div>
      </div>

      <div className="login_div2">
        <div className="login_div2_center">
          <h1 className="login_h1">Welcome!</h1>
          <p className="login_p">Enter details to login</p>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login_input"
              placeholder="Email"
            />
            <input
              type="password"
              className="login_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <h6>FORGOT PASSWORD</h6>
            <button className="login_button">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
