import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import dots from "../photos/dots.png";
import Modal from "./Modal";

const User = (user, { isModalOpenController }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { modalController, setModalController } = useGlobalContext();

  const openModal = () => {
    setIsModalOpen(true);
  };

  // useEffect(() => {
  //   if (isModalOpen) {
  //     setModalController(true);
  //   } else {
  //     setModalController(false);
  //   }
  // }, [isModalOpen]);

  return (
    <div key={user.id} className="user_top_child">
      <div className="user_child">
        <p className="user_p">{user.orgName}</p>
        <p className="user_p">{user.userName}</p>
        <p className="user_p">{user.email}</p>
        <p className="user_p">{user.phoneNumber}</p>
        <p className="user_p">{user.createdAt}</p>
        <p className="user_p">status</p>
        <div className="modal_div">
          <img src={dots} alt="" onClick={openModal} />
          <Modal
            isModalOpen={isModalOpen}
            isModalOpenController={isModalOpenController}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default User;
