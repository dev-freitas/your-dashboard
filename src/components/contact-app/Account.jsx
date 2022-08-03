import React from 'react';
import ContactInput from '../contact-app/ContactInput';
import ContactsList from '../contact-app/ContactsList';
import { StyledContacts } from '../styled/Contacts.styled';
import { StyledMain } from '../styled/Main.styled';

const Account = () => {

  return (
  <StyledMain>
    <StyledContacts>
    <div className='max-w-[500px] mx-auto my-5 p-1'>
      <h1 className='text-2xl font-bold py-4'>Contacts</h1>
      <ContactsList />
    </div>
    <div className='max-w-[500px] mx-auto my-5 p-1'>
      <h1 className='text-2xl font-bold py-4'>New contact</h1>
      <ContactInput />
    </div>
    </StyledContacts>
  </StyledMain>
  );
};

export default Account;
