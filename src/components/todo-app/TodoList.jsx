import React, { useState,useEffect } from 'react'
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';

const TodoList = () => {
    const [contact, setContact] = useState([]);
    const { user } = UserAuth();



    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setContact(doc.data()?.todoList);
        });
      }, [user?.email]);


  return (
      
    <div className="cflex flex-col py-2">
        <div className="flex flex-col py-2 mt-2">
            {contact.map((user) =>
            { return (
                <div className='mt-5 p-3 rounded border-2 border-blue-500'>
                    <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">{user.topic}</h3>
                    <p className="mt-4 text-xl md:text-xl lg:text-lg xl:text-2xl">{user.description}</p>
                    <p className="mt-4 text-xl md:text-xl lg:text-lg xl:text-2xl">{user.date}</p>
                    <p className="mt-4 text-xl md:text-xl lg:text-lg xl:text-2xl">{user.time}</p>
                </div>
            )})}
        </div>
    </div>
)
}

export default TodoList
