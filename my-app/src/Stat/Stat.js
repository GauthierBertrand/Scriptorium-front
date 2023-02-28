import { useState, useContext, useEffect } from "react";
import "./Stat.scss";
import hpIcon from "./hp.png";
import initIcon from "./init.png";
import acIcon from "./ac.png";
import distIcon from "./ranged.png";
import cacIcon from "./melee.png";
import magIcon from "./magic.png";
import next from "./../assets/images/next.png";
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";

const Stat = () => {
  const {
    diceRolls,
    stats,
    setStats,
    primaryStats,
    secondaryStats,
    statModifiers,
    setPrimaryStats,
    finalPrimaryStats
  } = useContext(GlobalContext);
  const [footerArray, setFooterArray] = useState(diceRolls);

  // Add the useEffect hook to update footerArray whenever diceRolls changes
  useEffect(() => {
    setFooterArray(diceRolls);
  }, [diceRolls]);

  // const handleMoveLeft = (index) => {
  //   const newStats = [...stats];
  //   if (index > 0 && newStats[index] !== "" && newStats[index - 1] === "") {
  //     const temp = newStats[index];
  //     newStats[index] = newStats[index - 1];
  //     newStats[index - 1] = temp;
  //     setStats(newStats);
  //     const newStatsObj = {};
  //     for (let i = 0; i < newStats.length; i++) {
  //       newStatsObj[newStats[i]] = newStats[i] !== "" ? primaryStats[newStats[i]] : 0;
  //     }
  //     setPrimaryStats(newStatsObj);
  //   }
  // };

  // const handleMoveRight = (index) => {
  //   const newStats = [...stats];
  //   if (index < newStats.length - 1 && newStats[index] !== "" && newStats[index + 1] === "") {
  //     const temp = newStats[index];
  //     newStats[index] = newStats[index + 1];
  //     newStats[index + 1] = temp;
  //     setStats(newStats);
  //     const newStatsObj = {};
  //     for (let i = 0; i < newStats.length; i++) {
  //       newStatsObj[newStats[i]] = newStats[i] !== "" ? primaryStats[newStats[i]] : 0;
  //     }
  //     setPrimaryStats(newStatsObj);
  //   }
  // };

  const handleFooterButtonClick = (value) => {
    const emptyStatIndex = stats.findIndex((stat) => stat === "");
    if (emptyStatIndex !== -1) {
      const newStats = [...stats];
      newStats[emptyStatIndex] = value;
      setStats(newStats);
      const index = footerArray.indexOf(value);
      if (index !== -1) {
        const newFooterArray = [...footerArray];
        newFooterArray.splice(index, 1);
        setFooterArray(newFooterArray);
        setPrimaryStats((prevStats) => ({
          ...prevStats,
          [Object.keys(prevStats)[emptyStatIndex]]: value,
        }));
      }
    }
  };

  const handleRemoveStat = (index) => {
    const newStats = [...stats];
    const removedStat = newStats[index];
    newStats[index] = "";
    console.log("newStats", newStats);
    console.log("removedStat", removedStat);
    setStats(newStats);
    if (removedStat) {
      setFooterArray([...footerArray, removedStat].sort());
      setPrimaryStats((prevStats) => ({
        ...prevStats,
        [Object.keys(prevStats)[index]]: 0,
      }));
    }
  };

  const PrimaryStatItem = ({
    name,
    value,
    index,
    /*handleMoveLeft, handleMoveRight,*/ handleRemoveStat,
    statModifiers,
  }) => {
    const modifier = value
      ? statModifiers[name] >= 0
        ? `+${statModifiers[name]}`
        : statModifiers[name]
      : "";
    console.log("value:", value);
    return (
      <div key={name} className="primary-stat-item">
        <div className="primary-stat-header">
          <div className="primary-stat-modifier">{modifier}</div>
          <div className="primary-stat-name">{name}</div>
        </div>
        <button
          className="primary-stat-text"
          onClick={() => handleRemoveStat(index)}
        >
          {value === 0 || value === "" ? "" : value}
        </button>
        {/* {index < 5 && (
          <button className="primary-stat-move-right" onClick={() => handleMoveRight(index)}>
            &gt;
          </button>
        )}
        {index > 0 && (
          <button className="primary-stat-move-left" onClick={() => handleMoveLeft(index)}>
            &lt;
          </button>
        )} */}
      </div>
    );
  };

  const iconMap = {
    HP: hpIcon,
    INIT: initIcon,
    AC: acIcon,
    DIST: distIcon,
    CAC: cacIcon,
    MAG: magIcon,
  };

  return (
    <div className="secondary-stat-container">
      <div className="secondary-stat-row">
        {Object.entries(secondaryStats).map(([key, value]) => {
          const iconName = iconMap[key];
          const displayValue =
            value === 0 ? 0 : value >= 0 ? `+${value}` : value;
          return (
            <div className="secondary-stat-item" key={key}>
              <img src={iconName} alt={`${key} Icon`} />
              <div className="secondary-stat-value">{displayValue}</div>
            </div>
          );
        })}
      </div>
      <div className="primary-stat-container">
        {Object.keys(finalPrimaryStats).map((key, index) => (
          <PrimaryStatItem
            key={key}
            name={key}
            value={finalPrimaryStats[key]}
            index={index}
            statModifiers={statModifiers}
            handleRemoveStat={handleRemoveStat}
            // handleMoveLeft={handleMoveLeft}
            // handleMoveRight={handleMoveRight}
          />
        ))}
        <div className="primary-stat-footer">
          {footerArray.map((value, index) => (
            <button
              key={index}
              className="primary-stat-button"
              onClick={() => handleFooterButtonClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <Link to="/voies">
        <img
          className="next-page"
          src={next}
          alt="Chevron pointing down for the next page"
        />
      </Link>
    </div>
  );
};

export default Stat;
