import React from 'react';
import { StyledNav } from '../styled/Navbar.styled';
import { FaGithub  } from 'react-icons/fa';
import { IoMdContacts,IoMdHappy } from 'react-icons/io';
import { BsListCheck } from 'react-icons/bs';
import { AiOutlinePicture } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';




const Navbar = () => {

  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <StyledNav>
        <div><IoMdHappy /><a href="/profile">Welcome</a></div>
        <div><IoMdContacts /><a href="/contacts">Contacts</a></div>
        <div><BsListCheck /><a href="/todo">To do list</a></div>
        <div><FaGithub /><a href="/githubapi">Github API</a></div>
        <div><AiOutlinePicture /><a href="/weather">Weather</a></div>
        <button onClick={handleLogout} className='px-6 py-2 my-4 border-2 border-gray-500 ..."'>
          Logout
        </button>
    </StyledNav>
  )
}

export default Navbar
