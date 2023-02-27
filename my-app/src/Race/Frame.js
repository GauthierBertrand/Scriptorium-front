import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import "./Frame.scss";


const Frame = ({ name, description, picture, racialAbilities }) => {
  const {
    selectedRace,
    setSelectedRace,
    selectedRaceAbility,
    setSelectedRaceAbility,
  } = useContext(GlobalContext);

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => {
      setSelectedRace(selectedRace === name ? null : name);
    },
    delta: 200,
  });

  const handleRaceAbilityClick = (raceAbility) => {
    setSelectedRaceAbility((prevSelectedRaceAbility) => {
      if (prevSelectedRaceAbility === raceAbility) {
        return "";
      } else {
        return raceAbility;
      }
    });
  };

  const handleRaceClick = () => {
    if (selectedRace === name) {
      setSelectedRace(null);
    } else {
      setSelectedRace(name);
    }
    setSelectedRaceAbility("");
  };

  return (
    <div className={`race ${selectedRace === name ? "expanded" : ""}`}>
      <div className="race-header" onClick={handleRaceClick} {...handlers}>
        <img className="race-picture" src={picture} alt={name} />
        <h3 className="race-title">{name}</h3>
      </div>

      {selectedRace === name && (
        <div className="race-content">
          <p>{description}</p>
          <div className="race-bonuses">
            {racialAbilities?.[0]?.name && (
              <button
                className={`race-bonus ${
                  selectedRaceAbility === racialAbilities[0].name
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleRaceAbilityClick(racialAbilities[0].name)}
              >
                {racialAbilities[0].name}
              </button>
            )}
            {racialAbilities?.[1]?.name && (
              <Link to="/generation-des-stats">
              <button
                className={`race-bonus ${
                  selectedRaceAbility === racialAbilities[1].name
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleRaceAbilityClick(racialAbilities[1].name)}
              >
                {racialAbilities[1].name}
              </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Frame;
