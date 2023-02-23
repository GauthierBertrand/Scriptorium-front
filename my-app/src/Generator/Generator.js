import { useState, useContext } from 'react';
import './Generator.scss';
import { GlobalContext } from '../GlobalContext';

const Generator = () => {
  const { diceRolls, setDiceRolls } = useContext(GlobalContext);
  const [selectedGeneration, setSelectedGeneration] = useState(null);

  const rollDice = () => {
    const newRolls = diceRolls.map(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      const rolls = [roll];
      for (let i = 0; i < 3; i++) {
        let newRoll = Math.floor(Math.random() * 6) + 1;
        while (rolls.includes(newRoll)) {
          newRoll = Math.floor(Math.random() * 6) + 1;
        }
        rolls.push(newRoll);
      }
      const minRoll = Math.min(...rolls);
      const sumRolls = rolls.reduce((acc, cur) => acc + cur);
      return sumRolls - minRoll;
    });
    setDiceRolls(newRolls);
    setSelectedGeneration('dice');
  };

  const generateStandardArray = () => {
    setDiceRolls([10, 11, 12, 13, 14, 15]);
    setSelectedGeneration('standard');
  };

  return (
    <div>
      <div className="generator-container">
        <button className={`generator-button ${selectedGeneration === 'dice' ? 'selected' : ''}`} onClick={rollDice}>
          <h1>Random Rolls</h1> 
          Roll 4 six-sided dice, drop the lowest, and add up the remaining three to generate one ability score. Repeat this process six times to generate all ability scores.
        </button>
      </div>
      <div className="generator-container">
        <button className={`generator-button ${selectedGeneration === 'standard' ? 'selected' : ''}`} onClick={generateStandardArray}>
          <h1>Standard array</h1>
          <div className="explanation-text">Use the standard array of ability scores: 15, 14, 13, 12, 11, 10.</div>
        </button>
      </div>
    </div>
  );
};


export default Generator;
