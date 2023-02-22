import React, { useState } from "react";
import "./Stat.scss";
import hpIcon from "./hp.png";
import initiativeIcon from "./initiative.png";
import acIcon from "./ac.png";
import rangedIcon from "./ranged.png";
import meleeIcon from "./melee.png";
import magicIcon from "./magic.png";

const Stat = () => {
  const [primaryStats, setPrimaryStats] = useState(["", "", "", "", "", ""]);
  const [footerArray, setFooterArray] = useState([15, 14, 13, 12, 11, 10]);


  const handleMoveLeft = (index) => {
    const newStats = [...primaryStats];
    if (index > 0 && newStats[index] !== "") {
      const temp = newStats[index];
      newStats[index] = newStats[index - 1];
      newStats[index - 1] = temp;
      setPrimaryStats(newStats);
    }
  };

  const handleMoveRight = (index) => {
    const newStats = [...primaryStats];
    if (index < newStats.length - 1 && newStats[index] !== "") {
      const temp = newStats[index];
      newStats[index] = newStats[index + 1];
      newStats[index + 1] = temp;
      setPrimaryStats(newStats);
    }
  };

  const handleFooterButtonClick = (value) => {
    const newStats = [...primaryStats];
    const emptyStatIndex = newStats.findIndex((stat) => stat === "");
    if (emptyStatIndex !== -1) {
      newStats[emptyStatIndex] = value;
      setPrimaryStats(newStats);
      setFooterArray(footerArray.filter((stat) => stat !== value));
    }
  };

  const handleRemoveStat = (index) => {
    const newStats = [...primaryStats];
    const removedStat = newStats[index];
    newStats[index] = "";
    setPrimaryStats(newStats);
    setFooterArray([...footerArray, removedStat].sort());
  };


  return (
    <div className="stat-container">
      <div className="secondary-stat-container">
        <div className="secondary-stat-row">
          <div className="secondary-stat-item">
            <img src={hpIcon} alt="HP Icon" />
            <div className="secondary-stat-value">10</div>
          </div>
          <div className="secondary-stat-item">
            <img src={initiativeIcon} alt="Initiative Icon" />
            <div className="secondary-stat-value">+3</div>
          </div>
          <div className="secondary-stat-item">
            <img src={acIcon} alt="AC Icon" />
            <div className="secondary-stat-value">15</div>
          </div>
        </div>
        <div className="secondary-stat-row">
          <div className="secondary-stat-item">
            <img src={rangedIcon} alt="Ranged Icon" />
            <div className="secondary-stat-value">+5</div>
          </div>
          <div className="secondary-stat-item">
            <img src={meleeIcon} alt="Melee Icon" />
            <div className="secondary-stat-value">+7</div>
          </div>
          <div className="secondary-stat-item">
            <img src={magicIcon} alt="Magic Icon" />
            <div className="secondary-stat-value">+2</div>
          </div>
        </div>
      </div>
      <div>
        <div className="primary-stat-container">
          <div key="STR" className="primary-stat-item">
            <div className="primary-stat-header">
              <div className="primary-stat-modifier">+2</div>
              <div className="primary-stat-name">STR</div>
            </div>
            <button
              className="primary-stat-text"
              onClick={() => handleRemoveStat(0)}
            >
              {primaryStats[0] || " "}
            </button>
            <button
              className="primary-stat-move-right"
              onClick={() => handleMoveRight(0)}
            >
              &gt;
            </button>
          </div>

          <div key="DEX" className="primary-stat-item">
            <div className="primary-stat-header">
              <div className="primary-stat-modifier">+4</div>
              <div className="primary-stat-name">DEX</div>
            </div>
            <button
              className="primary-stat-text"
              onClick={() => handleRemoveStat(1)}
            >
              {primaryStats[1] || " "}
            </button>
            <button
              className="primary-stat-move-left"
              onClick={() => handleMoveLeft(1)}
            >
              &lt;
            </button>
            <button
              className="primary-stat-move-right"
              onClick={() => handleMoveRight(1)}
            >
              &gt;
            </button>
          </div>
          <div key="CON" className="primary-stat-item">
            <div className="primary-stat-header">
              <div className="primary-stat-modifier">+4</div>
              <div className="primary-stat-name">CON</div>
            </div>
            <button
              className="primary-stat-text"
              onClick={() => handleRemoveStat(2)}
            >
              {primaryStats[2] || " "}
            </button>
            <button
              className="primary-stat-move-left"
              onClick={() => handleMoveLeft(2)}
            >
              &lt;
            </button>
            <button
              className="primary-stat-move-right"
              onClick={() => handleMoveRight(2)}
            >
              &gt;
            </button>
          </div>
          <div key="INT" className="primary-stat-item">
            <div className="primary-stat-header">
              <div className="primary-stat-modifier">+4</div>
              <div className="primary-stat-name">INT</div>
            </div>
            <button
              className="primary-stat-text"
              onClick={() => handleRemoveStat(3)}
            >
              {primaryStats[3] || " "}
            </button>
            <button
              className="primary-stat-move-left"
              onClick={() => handleMoveLeft(3)}
            >
              &lt;
            </button>
            <button
              className="primary-stat-move-right"
              onClick={() => handleMoveRight(3)}
            >
              &gt;
            </button>
          </div>
          <div key="WIS" className="primary-stat-item">
            <div className="primary-stat-header">
              <div className="primary-stat-modifier">+4</div>
              <div className="primary-stat-name">WIS</div>
            </div>
            <button
              className="primary-stat-text"
              onClick={() => handleRemoveStat(4)}
            >
              {primaryStats[4] || " "}
            </button>
            <button
              className="primary-stat-move-left"
              onClick={() => handleMoveLeft(4)}
            >
              &lt;
            </button>
            <button
              className="primary-stat-move-right"
              onClick={() => handleMoveRight(4)}
            >
              &gt;
            </button>
          </div>
          <div key="CHA" className="primary-stat-item">
            <div className="primary-stat-header">
              <div className="primary-stat-modifier">+2</div>
              <div className="primary-stat-name">CHA</div>
            </div>
            <button
              className="primary-stat-text"
              onClick={() => handleRemoveStat(5)}
            >
              {primaryStats[5] || " "}
            </button>
            <button
              className="primary-stat-move-left"
              onClick={() => handleMoveLeft(5)}
            >
              &lt;
            </button>
          </div>
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
      </div>
    </div>
  );
};

export default Stat;
