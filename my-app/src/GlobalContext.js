import { createContext, useState } from 'react';

export const GlobalContext = createContext({
  diceRolls: [],
  setDiceRolls: () => {},
});

const GlobalProvider = (props) => {
  const [diceRolls, setDiceRolls] = useState(Array(6).fill(0));

  return (
    <GlobalContext.Provider value={{ diceRolls, setDiceRolls }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
