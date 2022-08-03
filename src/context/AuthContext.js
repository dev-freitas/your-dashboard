import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';



const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db,'users',email), {
        profile: [],
        contactList: [],
        todoList: [],
        expenseTracker: [],
        memory: [],
    })
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }
  //test
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser)
  }
  
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }





  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ 
      createUser, 
      user, 
      logout, 
      signIn, 
      emailVerification,  
      resetPassword,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
