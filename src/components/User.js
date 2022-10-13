import React, { useEffect, useState } from "react";
import dots from "../photos/dots.png";
import modal2 from "../photos/modal2.png";
import modal3 from "../photos/modal3.png";
import modal1 from "../photos/eyes.png";
import { Link } from "react-router-dom";

const User = (user) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activate, setActivate] = useState(false);
  const [blacklist, setBlacklist] = useState(false);
  const [inactive, setInactive] = useState(true);

  const activateUser = () => {
    setActivate(true);
  };

  const blacklistUser = () => {
    setBlacklist(true);
  };

  const renderStatus = () => {
    if (activate) {
      return <button className="activate status_btn">activate</button>;
    } else if (blacklist) {
      return <button className="blacklist status_btn">Blacklisted</button>;
    }
    return <button className="inactive status_btn">Inactive</button>;
  };

  useEffect(() => {
    const modalHandler = (e) => {
      const modalOpener = e.target.classList.contains("dots");
      const modalContainer = e.target.classList.contains("show-modal");
      if (isModalOpen) {
        if (!modalOpener && !modalContainer) {
          setIsModalOpen(false);
        }
      }
    };
    document.addEventListener("click", modalHandler);
    return () => document.removeEventListener("click", modalHandler);
  });

  return (
    <div key={user.id} className="user_top_child">
      <div className="user_child">
        <p className="user_p">{user.orgName.slice(0, 8)}...</p>
        <p className="user_p">{user.userName.slice(0, 7)}...</p>
        <p className="user_p">{user.email.slice(0, 8)}...</p>
        <p className="user_p phone">{user.phoneNumber.slice(0, 8)}...</p>
        <p className="user_p">{user.createdAt.slice(0, 8)}...</p>
        <div>{renderStatus()}</div>
        <div className="modal_div">
          <img
            src={dots}
            className="dots"
            alt=""
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
          <div
            className={`${
              isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
            }`}
          >
            <div>
              <Link to={`/dashboard/${user.id}`} className="modal_buttons link">
                <img src={modal1} alt="" />
                <p>view Details</p>
              </Link>
            </div>
            <div className="modal_buttons" onClick={blacklistUser}>
              <img src={modal2} alt="" />
              <p>Blacklist User</p>
            </div>
            <div className="modal_buttons" onClick={activateUser}>
              <img src={modal3} alt="" />
              <p>Activate User</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default User;
