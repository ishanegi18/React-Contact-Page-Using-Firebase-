import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbEditCircle } from "react-icons/tb";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddandUpdate from "./AddandUpdate";
import { useEffect, useState } from 'react';
import UseDisclouse from "../hooks/UseDisclouse";

const ContactCard = ({ contact }) => {


  const { isOpen, onClose, onOpen } = UseDisclouse();


  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-red-400 flex item-center justify-between rounded-lg p-2"
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-3xl text-white flex item-center" />
          <div className="text-white">
            <h2 className="text-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl item-center justify-around">
          <FaRegTrashAlt
            onClick={() => deleteContact(contact.id)}
            className="text-white"
          />
          <TbEditCircle className="text-white cursor-pointer" onClick={onOpen} />
        </div>

      </div>
      <AddandUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
