import { createContext, useContext, useState } from 'react';

const SessionDataContext = createContext();

export const useSessionData = () => {
  const context = useContext(SessionDataContext);
  if (!context) {
    throw new Error('useSessionData must be used within a SessionDataProvider');
  }
  return context;
};

export const SessionDataProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);

  const setSessionData = (data) => {
    setSessionId(data.sessionId);
    // Add other session data as needed
  };

  return (
    <SessionDataContext.Provider value={{ sessionId, setSessionData }}>
      {children}
    </SessionDataContext.Provider>
  );
};