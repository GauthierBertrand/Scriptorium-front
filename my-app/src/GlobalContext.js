import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({
  diceRolls: [],
  setDiceRolls: () => {},
  primaryStats: { FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 },
  secondaryStats: { HP: 0, INIT: 0, AC: 0, ranged: 0, melee: 0, magic: 0 },
  raceBonus: { FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 },
  classBonus: { FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 },
  selectedRace: null,
  selectedClass: null,
  setSelectedRace: () => {},
  setSelectedClass: () => {},
  setRaceBonus: () => {},
  setClassBonus: () => {},
  setPrimaryStats: () => {},
  setSecondaryStats: () => {},
  statModifiers: { FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 },
  setStatModifiers: () => {},
  stats: [],
  setStats: () => {},
  selectedRaceAbility: null,
  setSelectedRaceAbility: () => {},
});

const GlobalProvider = (props) => {
  const [diceRolls, setDiceRolls] = useState(Array(6).fill(0));
  console.log(diceRolls);

  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedRaceAbility, setSelectedRaceAbility] = useState(null);


  const [stats, setStats] = useState(Array(6).fill(""));
  const [primaryStats, setPrimaryStats] = useState({
    FOR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    SAG: 0,
    CHA: 0,
  });
  const [secondaryStats, setSecondaryStats] = useState({
    HP: 8,
    INIT: 0,
    AC: 0,
    ranged: 0,
    melee: 0,
    magic: 0,
  });
  console.log(primaryStats.DEX);
  console.log(secondaryStats.INIT);
  const [statModifiers, setStatModifiers] = useState({
    FOR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    SAG: 0,
    CHA: 0,
  });
  const [raceBonus, setRaceBonus] = useState({
    FOR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    SAG: 0,
    CHA: 0,
  });
  console.log(raceBonus);
  const [classBonus, setClassBonus] = useState({
    FOR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    SAG: 0,
    CHA: 0,
    HP: 0,
    INIT: 0,
    AC: 0,
    ranged: 0,
    melee: 0,
    magic: 0,
  });

  useEffect(() => {
    const { FOR, DEX, CON, INT, SAG, CHA } = primaryStats;
    const newStatModifiers = {
      FOR: FOR === 0 ? 0 : Math.floor((FOR - 10) / 2),
      DEX: DEX === 0 ? 0 : Math.floor((DEX - 10) / 2),
      CON: CON === 0 ? 0 : Math.floor((CON - 10) / 2),
      INT: INT === 0 ? 0 : Math.floor((INT - 10) / 2),
      SAG: SAG === 0 ? 0 : Math.floor((SAG - 10) / 2),
      CHA: CHA === 0 ? 0 : Math.floor((CHA - 10) / 2),
    };
    setStatModifiers(newStatModifiers);
  }, [primaryStats, raceBonus, classBonus]);

  useEffect(() => {
    const newSecondaryStats = {
      HP: classBonus.HP + statModifiers.CON,
      INIT: primaryStats.DEX + raceBonus.DEX + classBonus.DEX,
      AC: secondaryStats.AC,
      ranged: statModifiers.DEX + raceBonus.DEX,
      melee: statModifiers.FOR + raceBonus.FOR,
      magic: statModifiers.INT + raceBonus.INT,
    };
    setSecondaryStats(newSecondaryStats);
  }, [primaryStats, raceBonus, classBonus, statModifiers, secondaryStats.AC]);

  

  return (
    <GlobalContext.Provider
      value={{
        diceRolls,
        setDiceRolls,
        primaryStats,
        setPrimaryStats,
        secondaryStats,
        setSecondaryStats,
        statModifiers,
        setStatModifiers,
        stats,
        setStats,
        raceBonus,
        setRaceBonus,
        classBonus,
        setClassBonus,
        selectedRace,
        setSelectedRace,
        selectedRaceAbility,
        setSelectedRaceAbility,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
