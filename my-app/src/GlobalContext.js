import { createContext, useState } from 'react';

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {


  return (
    <GlobalContext.Provider value={null}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
