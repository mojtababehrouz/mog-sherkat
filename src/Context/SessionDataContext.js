import { createContext, useContext, useState } from 'react';

const SessionDataContext = createContext();

export const SessionDataProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState(null);

  return (
    <SessionDataContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionDataContext.Provider>
  );
};

export const useSessionData = () => {
  return useContext(SessionDataContext);
};