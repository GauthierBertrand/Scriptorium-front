import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import axios from "axios";
import "./Race.scss";
import Frame from "./Frame";


const Race = () => {
  const [races, setRaces] = useState([]);
  const {
    selectedRace,
    setSelectedRace,
    setSelectedRaceAbility,
  } = useContext(GlobalContext);

  useEffect(() => {
    axios.get("http://localhost:8080/api/races").then((response) => {
      setRaces(response.data.races);
    });
  }, []);

  const handleRaceClick = (name) => {
    if (selectedRace === name) {
      setSelectedRace(null);
      setSelectedRaceAbility("");
    } else {
      setSelectedRace(name);
    }
  };

  return (
    <div className="races-container">
      <h1 className="races-title">Races</h1>
      <div className="races-frames">
        {races.map((race, index) => (
          <Frame
            key={index}
            name={race.name}
            description={race.description}
            picture={race.picture}
            racialAbilities={race.racialAbilities}
            selectedRace={selectedRace}
            handleRaceClick={handleRaceClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Race;
