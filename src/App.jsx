import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import { FaSearch,FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import {  onSnapshot } from "firebase/firestore";
import ContactCard from './Components/ContactCard';
import AddandUpdate from './Components/AddandUpdate';
import UseDisclouse from './hooks/UseDisclouse';

function App() {


  const [contacts, setContacts] = useState([]);
 const {isOpen,onClose,onOpen} = UseDisclouse();
   
  useEffect(() => {

    const getContacts = async () => {
       try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });}
      catch (error) {
        console.log(error)

      }


    };

    getContacts()
  }, [])


  const filterContacts=(e)=>{
   const value = e.target.value;
    const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

  const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

          setContacts(filteredContacts);
          return filteredContacts;});
  }
  return (
    <>
      <div className='max-auto max-w[370px] px-4'>
        <Navbar />
        <div className='flex gap-2'>
          <div className='flex relative items-center flex-grow' >
            <FaSearch className='ml-2 text-2xl absolute'  />
            <input onChange={filterContacts} type="text" className='flex-grow h-10 border bg-transparent border-black rounded-md pl-10' />
          </div>
          <div>
            <FaPlusCircle onClick={onOpen} className='text-4xl cursor-pointer' />
          </div>
        </div>
        <div className='mt-4 gap-3 flex-col flex'>{
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        }</div>
      </div>
    <AddandUpdate onClose={onClose} isOpen={isOpen}/>
    </>
  )
}

export default App
