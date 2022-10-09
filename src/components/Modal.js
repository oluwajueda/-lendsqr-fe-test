import React from 'react'
import modal1 from "../photos/modal1.png";
import modal2 from "../photos/modal2.png";
import modal3 from "../photos/modal3.png";

const Modal = () => {
  return (
      <div>
          <div className='modal_buttons'>
              <img src={modal1} alt="" />
              <p>view Details</p>
          </div>
          <div className='modal_buttons'>
              <img src={modal2} alt=""/>
              <p>view Details</p>
          </div>
          <div className='modal_buttons'>
              <img src={modal1} alt=""/>
              <p>view Details</p>
          </div>
      
    </div>
  )
}

export default Modal
