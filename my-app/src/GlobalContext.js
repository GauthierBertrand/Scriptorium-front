import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({
  diceRolls: [],
  setDiceRolls: () => {},
  primaryStats: { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 },
  secondaryStats: { HP: 0, INIT: 0, AC: 0, ranged: 0, melee: 0, magic: 0 },
  raceBonus: { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 },
  classBonus: { HP: 0 },
  selectedRace: null,
  selectedClass: null,
  classesStats: [],
  setSelectedRace: () => {},
  setSelectedClass: () => {},
  setRaceBonus: () => {},
  setClassBonus: () => {},
  setClassStats: () => {},
});

const GlobalProvider = (props) => {
  const [diceRolls, setDiceRolls] = useState(Array(6).fill(0));
  console.log(diceRolls);
  const [stats, setStats] = useState(Array(6).fill(""));
  const [primaryStats, setPrimaryStats] = useState({
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
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
  const [statModifiers, setStatModifiers] = useState({
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  });
  const [raceBonus, setRaceBonus] = useState({
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
    HP: 8,
    INIT: 0,
    AC: 0,
    ranged: 0,
    melee: 0,
    magic: 0,
  });
  const [classBonus, setClassBonus] = useState([{
    HP: 0
  }]);
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedClass, setSelectedClass] = useState(0);
  const [classesStats, setClassStats] = useState([]);

  const handleSelectClass = (index) => {
    setSelectedClass(index);
  }

  const handleClassBonus = () => {
    if (classBonus[selectedClass]) {
      return classBonus[selectedClass].HP;
    }
    console.log(classBonus);
  }

  useEffect(() => {
    const { STR, DEX, CON, INT, WIS, CHA } = primaryStats;
    const newStatModifiers = {
      STR: STR === 0 ? 0 : Math.floor((STR - 10) / 2),
      DEX: DEX === 0 ? 0 : Math.floor((DEX - 10) / 2),
      CON: CON === 0 ? 0 : Math.floor((CON - 10) / 2),
      INT: INT === 0 ? 0 : Math.floor((INT - 10) / 2),
      WIS: WIS === 0 ? 0 : Math.floor((WIS - 10) / 2),
      CHA: CHA === 0 ? 0 : Math.floor((CHA - 10) / 2),
    };
    setStatModifiers(newStatModifiers);
  }, [primaryStats, raceBonus, classBonus]);

  useEffect(() => {
    const newSecondaryStats = {
      HP: handleClassBonus() + statModifiers.CON,
      INIT: primaryStats.DEX + raceBonus.DEX,
      AC: secondaryStats.AC,
      ranged: statModifiers.DEX + raceBonus.DEX,
      melee: statModifiers.STR + raceBonus.STR,
      magic: statModifiers.INT + raceBonus.INT,
    };
    setSecondaryStats(newSecondaryStats);
    console.log(newSecondaryStats);
  }, [primaryStats, raceBonus, classBonus, statModifiers, secondaryStats.AC, selectedClass]);

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
        selectedClass,
        setSelectedRace,
        setSelectedClass,
        handleSelectClass,
        classesStats,
        setClassStats,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
