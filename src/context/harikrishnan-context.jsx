import { createContext } from "react";

const HarikrishnanContext = createContext();

const HarikrishnanProvider = ({ initialValue, children }) => {
  return (
    <HarikrishnanContext.Provider value={initialValue}>
      {children}
    </HarikrishnanContext.Provider>
  );
};

export { HarikrishnanContext, HarikrishnanProvider };
