import React, { useState,useEffect } from 'react'
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';

const ContactsList = () => {
    const [contact, setContact] = useState([]);
    const { user } = UserAuth();



    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setContact(doc.data()?.contactList);
        });
      }, [user?.email]);


  return (
      
            <div className="cflex flex-col py-2">
                <div className="flex flex-col mt-2 contact">
                    {contact.map((user) =>
                    { return (
                        <div className='mt-5 p-5 rounded border-2 border-blue-500 ...'>
                            <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">{user.name}</h3>
                            <p className="mt-4 text-xl md:text-xl lg:text-lg xl:text-2xl">{user.email}</p>
                            <p className="mt-4 text-xl md:text-xl lg:text-lg xl:text-2xl">{user.number}</p>
                        </div>
                    )})}
                </div>
            </div>
)
}

export default ContactsList
