import React, { useState,useEffect } from 'react'
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';

const MemoriesList = () => {
    const [contact, setContact] = useState([]);
    const { user } = UserAuth();



    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setContact(doc.data()?.memory);
        });
      }, [user?.email]);


  return (
      
            <div className="cflex flex-col py-2">
                <div className="flex flex-col mt-2">
                    {contact.map((user) =>
                    { return (
                        <div className='mt-5 p-5 rounded border-2 border-blue-500 ...'>
                            <div>{user.memoryImg}</div>
                            <p className="mt-4 text-xl md:text-xl lg:text-lg xl:text-2xl">{user.imgCaption}</p>
                        </div>
                    )})}
                </div>
            </div>
)
}

export default MemoriesList
