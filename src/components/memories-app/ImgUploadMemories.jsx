import React, { useState } from 'react'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';

const ImgUploadMemories = () => {
    const {user} = UserAuth()

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      number: ''
    })
  
    const {memoryImg, imgCaption} = formData;
    
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
          await updateDoc(docRef, {memory: arrayUnion(formData)});
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    }
  
    return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Upload your memory</label>
                <input 
                onChange={handleChange} 
                className='border p-3' 
                type='file'
                value={memoryImg}
                id='memoryImg'
                name='memoryImg' 
                />
              </div>
              <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'></label>Memory Caption
                <input 
                onChange={handleChange}  
                className='border p-3' 
                type='text' 
                value={imgCaption}
                id='imgCaption'
                name='imgCaption'
                />
              </div>
              <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
              Add new memory
              </button>
        </form>
      </div>
    )
  }
export default ImgUploadMemories
