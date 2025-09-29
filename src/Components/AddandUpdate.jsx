import Modal from "./modal"
import { Form, Formik, Field } from "formik";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';


const AddandUpdate = ({ isOpen, onClose , isUpdate,contact}) => {

    const addContact = async (contact) => {
        try {
            const contactsRef = collection(db, 'contacts');
            await addDoc(contactsRef, contact);
            onClose();
            toast.success("Contact added succesfully")
        } catch (error) {
            console.log(error)
        }
    }
    
    const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error('Failed to update contact');
    }
  };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}>


                <Formik
            enableReinitialize
            initialValues={
              isUpdate && contact ? {
                name: contact.name || '',
                email: contact.email || '',
              } : {
                name: '',
                email: '',
              }
            }
            onSubmit={(values) => {
            console.log(values);
            isUpdate && contact?.id ? updateContact(values, contact.id) : addContact(values);
          }}
                >
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="border h-10" /></div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field name="email" className="border h-10" /></div>
                        <button className="bg-black text-white p-3">
                            {isUpdate? "update" : "add"} contact
                        </button>

                    </Form>
                </Formik>

            </Modal>

        </div>

    )
}

export default AddandUpdate