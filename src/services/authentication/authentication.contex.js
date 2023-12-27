import { useState, createContext, useEffect } from 'react';

export const AuthenticationContext = createContext();

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './authentication.service';

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
    } else {
      setUser(null);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString().split('/')[1].slice(0, -2));
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password != repeatedPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString().split('/')[1].slice(0, -2));
      });
  };

  const onLogout = () => {
    auth.signOut().then(setUser(null));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
