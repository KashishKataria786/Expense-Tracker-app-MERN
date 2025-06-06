
import React, { useState } from "react";
import Modal from "react-modal";
import AddExpenseForm from "./AddExpenseForm";

import { IoMdClose } from "react-icons/io";
Modal.setAppElement("#root");

function AddExpenseModal({modalIsOpen,setModalIsOpen}) {

  return (
    <div className="w-full ">
     
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(255, 255, 255, 0.43)" },
          content: { margin: "auto", width: "500px" },
        }}
      >
         <div className="flex justify-between items-center">
           <h2 className='font-semibold text-2xl pl-3 '>Add An Expense</h2>
        <IoMdClose onClick={()=>setModalIsOpen(false)} size={40} />
      </div>
        <AddExpenseForm setModalIsOpen={setModalIsOpen}/>
        
      </Modal>
    </div>
    // 
  )
}

export default AddExpenseModal