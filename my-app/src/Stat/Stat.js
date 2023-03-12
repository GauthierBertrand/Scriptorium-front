import { useState, useContext, useEffect } from "react";
import "./Stat.scss";
import hpIcon from "../assets/images/health.png";
import initIcon from "../assets/images/initiative.png";
import acIcon from "../assets/images/defense.png";
import distIcon from "../assets/images/ranged.png";
import cacIcon from "../assets/images/melee.png";
import magIcon from "../assets/images/magic.png";
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
    finalPrimaryStats,
    classesStats,
    selectedClass,
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
    const modifier = value < 3
      ? ""
      : value && statModifiers[name] >= 0
        ? value >= 10
          ? `+ ${statModifiers[name]}`
          : value >= 4
            ? statModifiers[name]
            : ""
        : statModifiers[name];

    // const isRecommended = classesStats[selectedClass].stat.find(
    //   (stat) => stat.name.toUpperCase().startsWith(name.slice(0, 3)) && stat.isRecommended
    // );

    // console.log(classesStats[selectedClass].stat, isRecommended);

    return (
      <div key={name} className="primary-stat-item">
        <div className="primary-stat-lines" />
        <div className="primary-stat-modifier box">{modifier}</div>
        <div className={`primary-stat-name box `}>{name}</div>
        <button
          className="primary-stat-value box"
          onClick={() => handleRemoveStat(index)}
        >
          {value === 0 || value === "" ? "" : value < 3 && value > 0 ? `+${value}` : value}
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
    PV: hpIcon,
    INIT: initIcon,
    AC: acIcon,
    DIST: distIcon,
    CAC: cacIcon,
    MAG: magIcon,
  };

  return (
    <div className="main stat-main">
      <div className="parent">
        <div className="secondary-stat-container-parent">
          <div className="secondary-stat-container">
            {Object.entries(secondaryStats).map(([key, value]) => {
              const iconName = iconMap[key];

              let displayValue;

              if (key === "HP" || key === "INIT" || key === "AC") {
                displayValue = String(value);
              } else if (key === "DIST" || key === "CAC" || key === "MAG") {
                displayValue = value >= 0 ? `+${value}` : value;
              } else {
                displayValue = value;
              }
              return (
                <div className="secondary-stat-item" key={key}>
                  <img src={iconName} alt={`${key} Icon`} />
                  <div className="secondary-stat-value box">{displayValue}</div>
                </div>
              );
            })}
          </div>
          <p className="Stat-desciption box">
            <p>
              Le personnage est défini par six stats auxquelles on assigne un score constitué de deux parties : la valeur et le Modificateur (Mod.).
            </p>
            <p>
              <span>Force (FOR) </span> &nbsp; mesure la puissance physique et musculaire.
              Gagner un bras de fer, soulever, tordre, lancer un objet lourd, immobiliser un adversaire. Attaquer au contact. Etc.
            </p>
            <p>
              <span>Dextérité (DEX) </span> &nbsp; évalue l’agilité, les réflexes et l’adresse.
              Faire des acrobaties, tenir en équilibre, grimper, sauter, sprinter, se déplacer en silence, crocheter, chaparder, esquiver une attaque. Attaquer à distance. Etc.
            </p>
            <p>
              <span>Constitution (CON) </span> &nbsp; représente la santé et l’endurance. Résister aux éléments, à la fatigue, aux poisons, aux privations, courir longtemps. Encaisser des blessures. Etc.
            </p>
            <p>
              <span>Intelligence (INT) </span> &nbsp; représente les capacités d’apprentissage et de raisonnement.
              Raisonner, comprendre, connaître, apprendre, se souvenir, chercher, trouver une information (livre). Attaquer par magie. Etc.
            </p>
            <p>
              <span>Sagesse (SAG) </span> &nbsp; relie le personnage à l’univers : volonté, intuition, perception.
              Observer, entendre, détecter, repérer, pister, deviner, ressentir. Résister à la peur ou aux influences mentales. Etc.
            </p>
            <p>
              <span>Charisme (CHA) </span> &nbsp; traduit la force de persuasion, la présence et la capacité à commander.
              Bluffer, mentir, négocier, séduire, intimider, convaincre. Etc.
            </p>
          </p>
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
        </div>
        <div className="primary-stat-footer">
          {footerArray.map((value, index) => (
            <button
              key={index}
              className="primary-stat-footer-button box"
              onClick={() => handleFooterButtonClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <Link to="/voies">
          <img
            className="next-page"
            src={next}
            alt="Chevron pointing down for the next page"
          />
        </Link>
      </div>
    </div>
  );
};

export default Stat;
