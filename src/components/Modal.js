import React from 'react'
import { useGlobalContext } from '../context';
import modal1 from "../photos/modal1.png";
import modal2 from "../photos/modal2.png";
import modal3 from "../photos/modal3.png";


const Modal = () => {

    const {isModalOpen} = useGlobalContext()

  return (
      <div className={`${isModalOpen?'modal-overlay show-modal': 'modal-overlay'}`}>
          <div className='modal_buttons'>
              <img src={modal1} alt="" />
              <p>view Details</p>
          </div>
          <div className='modal_buttons'>
              <img src={modal2} alt=""/>
              <p>view Details</p>
          </div>
          <div className='modal_buttons'>
              <img src={modal3} alt=""/>
              <p>view Details</p>
          </div>
      
    </div>
  )
}

export default Modal
