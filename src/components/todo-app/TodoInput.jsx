import React, { useState } from 'react'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';

const TodoInput = () => {

  const {user} = UserAuth()

  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    date: '',
    time: ''
  })

  const {topic, description, date, time} = formData;
  
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const docRef = doc(db,'users', `${user?.email}`);
        await updateDoc(docRef, {todoList: arrayUnion(formData)});
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Topic</label>
              <input 
              onChange={handleChange} 
              className='border p-3' 
              type='text'
              value={topic}
              id='topic'
              name='topic' 
              />
            </div>
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Date</label>
              <input 
              onChange={handleChange} 
              className='border p-3' 
              type='date' 
              value={date}
              id='date'
              name='date'
              />
            </div>
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Time</label>
              <input 
              onChange={handleChange}  
              className='border p-3' 
              type='time' 
              value={time}
              id='time'
              name='time'
              />
            </div>
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Description</label>
                <textarea 
                onChange={handleChange}  
                className='border p-3' 
                type='text' 
                value={description}
                name="description" 
                id="description" 
                cols="30" 
                rows="10"></textarea>
            </div>
            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-3 my-2 text-white'>
            Add new 
            </button>
      </form>
    </div>
  )
}

export default TodoInput
