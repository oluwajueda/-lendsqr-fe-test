import React from "react";
import { useGlobalContext } from "../context";
import dots from "../photos/dots.png";
import Modal from "./Modal";

const User = (user) => {

   const {openModal} = useGlobalContext()

  return (
    <div key={user.id} className="user_top_child">
    <div  className="user_child">
      <p className="user_p">{user.orgName}</p>
      <p className="user_p">{user.userName}</p>
      <p className="user_p">{user.email}</p>
      <p className="user_p">{user.phoneNumber}</p>
      <p className="user_p">{user.createdAt}</p>
      <p className="user_p">status</p>
        <img src={dots} alt='' onClick={openModal} />
          <Modal/>
      </div>
      <hr/>
      </div>
  );
};

export default User;
