import React from 'react';
import Signin from './components/login/Signin';
import Signup from './components/login/Signup';
import Account from './components/contact-app/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/login/ProtectedRoute';
import Navbar from './components/general/Navbar'
import Dashboard from './components/general/Dashboard'
import Todo from './components/todo-app/Todo';
import Header from './components/general/Header';
import Memories from './components/memories-app/Memories';
import Weather from './components/general/Weather';
import GithubApi from './components/general/GithubApi';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Header />
                <Navbar />
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/contacts'
            element={
              <ProtectedRoute>
                <Header />
                <Navbar />
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path='/todo'
            element={
              <ProtectedRoute>
                <Header />
                <Navbar />
                <Todo />
              </ProtectedRoute>
            }
          />
          <Route
            path='/memories'
            element={
              <ProtectedRoute>
                <Header />
                <Navbar />
                <Memories />
              </ProtectedRoute>
            }
          />
          <Route
            path='/weather'
            element={
              <ProtectedRoute>
                <Header />
                <Navbar />
                <Weather />
              </ProtectedRoute>
            }
          />
          <Route
            path='/githubapi'
            element={
              <ProtectedRoute>
                <Header />
                <Navbar />
                <GithubApi />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
