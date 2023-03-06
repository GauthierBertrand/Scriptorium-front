import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { SheetContext } from "../SheetContext";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import "./Frame.scss";

const Frame = ({ name, description, picture, racialAbilities, raceIndex, handleRaceClick }) => {
  const {
    selectedRace,
    setSelectedRace,
    selectedRaceAbility,
    setSelectedRaceAbility,
  } = useContext(GlobalContext);

  const {
    selectedRaceAbilityId,
    setSelectedRaceAbilityId
  } = useContext(SheetContext);

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => {
      setSelectedRace(selectedRace === name ? null : name);
    },
    delta: 200,
  });

  const handleClick = () => {
    handleRaceClick(raceIndex);
  };

  const handleRaceAbilityClick = (raceAbility) => {
    console.log(raceAbility);
    setSelectedRaceAbility((prevSelectedRaceAbility) => {
      if (prevSelectedRaceAbility === raceAbility.name) {
        return "";
      } else {
        return raceAbility.name;
      }
    });
    setSelectedRaceAbilityId(raceAbility.id);
  };

  return (
    <div className={`race ${selectedRace === raceIndex ? "expanded" : ""}`}>
      <div className="race-header" onClick={handleClick} {...handlers}>
        <img className="race-picture" src={picture} alt={name} />
        <h3 className="race-title">{name}</h3>
      </div>

      {selectedRace === raceIndex && (
        <div className="race-content">
          <p>{description}</p>
          <div className="race-bonuses">
            {racialAbilities?.[0]?.name && (
              <Link to="/general">
              <button
                className={`race-bonus ${
                  selectedRaceAbility === racialAbilities[0].name
                    ? "selected"
                    : ""
                }`}
                onClick={() => {
                  handleRaceAbilityClick(racialAbilities[0]);
                }}
              >
                {racialAbilities[0].name}
              </button>
              </Link>
            )}
            {racialAbilities?.[1]?.name && (
              <Link to="/general">
                <button
                  className={`race-bonus ${
                    selectedRaceAbility === racialAbilities[1].name
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleRaceAbilityClick(racialAbilities[1]);
                  }}
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
