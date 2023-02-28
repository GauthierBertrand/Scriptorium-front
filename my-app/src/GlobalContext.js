import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({
  diceRolls: [],
  setDiceRolls: () => {},
  primaryStats: { FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 },
  secondaryStats: { HP: 0, INIT: 0, AC: 0, ranged: 0, melee: 0, magic: 0 },
  raceBonus: { FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 },
  classBonus: { HP: 0 },
  selectedRace: null,
  selectedClass: null,
  classesStats: [],
  setSelectedRace: () => {},
  setSelectedClass: () => {},
  setRaceBonus: () => {},
  setClassBonus: () => {},
  setClassStats: () => {},
  setPrimaryStats: () => {},
  setSecondaryStats: () => {},
  statModifiers: { FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 },
  setStatModifiers: () => {},
  stats: [],
  setStats: () => {},
  selectedRaceAbility: null,
  setSelectedRaceAbility: () => {},
  finalPrimaryStats: { FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 },
});

const GlobalProvider = (props) => {
  const [diceRolls, setDiceRolls] = useState(Array(6).fill(0));

  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedRaceAbility, setSelectedRaceAbility] = useState(null);

  const [selectedClass, setSelectedClass] = useState(0);
  const [classesStats, setClassStats] = useState([]);

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
    HP: 0,
    INIT: 0,
    AC: 0,
    ranged: 0,
    melee: 0,
    magic: 0,
  });
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
    HP: 0,
  });

  const handleSelectClass = (index) => {
    setSelectedClass(index);
  };

  const handleClassBonus = () => {
    if (classBonus[selectedClass]) {
      return classBonus[selectedClass].HP;
    }
  };

  const finalPrimaryStats = {
    FOR: primaryStats.FOR + raceBonus.FOR,
    DEX: primaryStats.DEX + raceBonus.DEX,
    CON: primaryStats.CON + raceBonus.CON,
    INT: primaryStats.INT + raceBonus.INT,
    SAG: primaryStats.SAG + raceBonus.SAG,
    CHA: primaryStats.CHA + raceBonus.CHA,
  };

  useEffect(() => {
    const { FOR, DEX, CON, INT, SAG, CHA } = finalPrimaryStats;
    const newStatModifiers = {
      FOR: FOR <= 0 ? 0 : Math.floor((FOR - 10) / 2),
      DEX: DEX <= 0 ? 0 : Math.floor((DEX - 10) / 2),
      CON: CON <= 0 ? 0 : Math.floor((CON - 10) / 2),
      INT: INT <= 0 ? 0 : Math.floor((INT - 10) / 2),
      SAG: SAG <= 0 ? 0 : Math.floor((SAG - 10) / 2),
      CHA: CHA <= 0 ? 0 : Math.floor((CHA - 10) / 2),
    };
    setStatModifiers(newStatModifiers);
  }, [primaryStats, raceBonus, classBonus]);

  useEffect(() => {
    const newSecondaryStats = {
      HP: handleClassBonus() + statModifiers.CON,
      INIT: finalPrimaryStats.DEX,
      AC: secondaryStats.AC,
      ranged: statModifiers.DEX,
      melee: statModifiers.FOR,
      magic: statModifiers.INT,
    };
    setSecondaryStats(newSecondaryStats);
  }, [
    primaryStats,
    raceBonus,
    classBonus,
    statModifiers,
    secondaryStats.AC,
    selectedClass,
  ]);

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
        selectedClass,
        setSelectedClass,
        classesStats,
        setClassStats,
        handleSelectClass,
        handleClassBonus,
        finalPrimaryStats,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
