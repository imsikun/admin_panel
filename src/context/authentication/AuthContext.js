import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  //her we are getting the user, if there is not user in localstorage then simply send null and go to the login page
  currentUser: JSON.parse(localStorage.getItem('user')) || null,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // store the user in firebase and update it with every curent user
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
