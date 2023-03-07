import { useState, useContext } from "react";
import "./Generator.scss";
import { GlobalContext } from "../GlobalContext";
import { NavLink } from "react-router-dom";

const Generator = () => {
  const { diceRolls, setDiceRolls } = useContext(GlobalContext);
  const [selectedGeneration, setSelectedGeneration] = useState(null);

  const rollDice = () => {
    const newRolls = diceRolls.map(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      const rolls = [roll];
      for (let i = 0; i < 3; i++) {
        let newRoll = Math.floor(Math.random() * 6) + 1;
        rolls.push(newRoll);
      }
      const minRoll = Math.min(...rolls);
      const sumRolls = rolls.reduce((acc, cur) => acc + cur);
      return sumRolls - minRoll;
    });
    setDiceRolls(newRolls);
    setSelectedGeneration("dice");
  };

  const generateStandardArray = () => {
    setDiceRolls([15, 14, 13, 12, 10, 8]);
    setSelectedGeneration("standard");
  };

  return (
    <div>
      <h1>Génération des statistiques</h1>
      <div className="generator-container">
        <NavLink to="/stats" className="button-link">
          <button
            className={`generator-button ${
              selectedGeneration === "dice" ? "selected" : ""
            }`}
            onClick={rollDice}
          >
            <h1>Random Rolls</h1>
            Lancer 4 dés à 6 faces, et faire la somme des 3 meilleurs. Répéter ce processus 6 fois
            pour générer les 6 valeurs de stats.
          </button>
        </NavLink>
      </div>
      <div className="generator-container">
        <NavLink to="/stats" className="button-link">
          <button
            className={`generator-button ${
              selectedGeneration === "standard" ? "selected" : ""
            }`}
            onClick={generateStandardArray}
          >
            <h1>Série standard</h1>
            <div className="explanation-text">
              Utiliser la série standard pour générer les 6 valeurs de stats : 15, 14, 13, 12, 10, 8.
            </div>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Generator;
