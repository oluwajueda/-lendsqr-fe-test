import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpenController, setIsModalOpenController] = useState(false);

  return (
    <AppContext.Provider
      value={{ isModalOpenController, setIsModalOpenController }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
