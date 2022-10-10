import React, { useEffect, useState } from "react";
import dots from "../photos/dots.png";
import modal1 from "../photos/modal1.png";
import modal2 from "../photos/modal2.png";
import modal3 from "../photos/modal3.png";

const User = (user) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <div key={user.id} className='user_top_child'>
      <div className='user_child'>
        <p className='user_p'>{user.orgName}</p>
        <p className='user_p'>{user.userName}</p>
        <p className='user_p'>{user.email}</p>
        <p className='user_p'>{user.phoneNumber}</p>
        <p className='user_p'>{user.createdAt}</p>
        <p className='user_p'>status</p>
        <div className='modal_div'>
          <img
            src={dots}
            className='dots'
            alt=''
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
          <div
            className={`${
              isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
            }`}
            onClick={() => {
              // setIsModalOpen(false);
            }}
          >
            <div className='modal_buttons'>
              <img src={modal1} alt='' />
              <p>view Details</p>
            </div>
            <div className='modal_buttons'>
              <img src={modal2} alt='' />
              <p>Blacklist User</p>
            </div>
            <div className='modal_buttons'>
              <img src={modal3} alt='' />
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
