import React, { createContext, useContext, useState } from 'react';

const SharedMainPageDataContext = createContext();

export const MainPageDataProvider = ({ children }) => {
  const [activeState, setActiveState] = useState("home");

  return (
    <SharedMainPageDataContext.Provider value={{ activeState, setActiveState }}>
      {children}
    </SharedMainPageDataContext.Provider>
  );
};

export const useMainPageData = () => useContext(SharedMainPageDataContext);
