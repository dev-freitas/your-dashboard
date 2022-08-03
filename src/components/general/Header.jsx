import React from 'react'
import { StyledHeader } from '../styled/Header.styled'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import Calendar from './Calendar';



const Header = () => {
  const { user, logout } = UserAuth();
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
    <StyledHeader>
        <Calendar />
        <h2>{user && user.email}</h2>
        <button onClick={handleLogout} className='px-6 py-2 my-4 border-2 border-gray-500 ..."'>
          Logout
        </button>
    </StyledHeader>
  )
}

export default Header
