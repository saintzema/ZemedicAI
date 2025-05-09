import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock login function
  function login(email, password) {
    return new Promise((resolve, reject) => {
      // In a real app, you would make an API call to your backend
      setTimeout(() => {
        if (email && password) {
          const user = {
            email,
            name: email.split('@')[0],
            id: '123456'
          };
          setCurrentUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  }

  // Mock register function
  function register(email, password, name) {
    return new Promise((resolve, reject) => {
      // In a real app, you would make an API call to your backend
      setTimeout(() => {
        if (email && password && name) {
          const user = {
            email,
            name,
            id: '123456'
          };
          setCurrentUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid registration details'));
        }
      }, 1000);
    });
  }

  // Mock logout function
  function logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setCurrentUser(null);
        localStorage.removeItem('user');
        resolve();
      }, 500);
    });
  }

  // Check if user is stored in localStorage on page load
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setCurrentUser(user);
    }
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
