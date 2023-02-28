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
    selectedRaceAbility,
    setSelectedRaceAbility,
    setRaceBonus,
    raceBonus,
  } = useContext(GlobalContext);

  useEffect(() => {
    axios.get("http://localhost:8080/api/races").then((response) => {
      setRaces(response.data.races);
      console.log(response.data.races);

    });
  }, []);

  const handleRaceClick = (raceIndex) => {
    if (selectedRace === raceIndex) {
      setSelectedRace(null);
      setSelectedRaceAbility("");
      setRaceBonus({});
    } else {
      setSelectedRace(raceIndex);
      const raceStats = races[raceIndex]?.stats || {};
      setRaceBonus((prevRaceBonus) => ({ ...prevRaceBonus, ...raceStats }));
    }
    setSelectedRaceAbility("");
  };
  
  
  

  return (
    <div className="races-container">
      <h1 className="races-title">Races</h1>
      <div className="races-frames">
        {races.map((race, index) => (
          <Frame
            key={index}
            raceIndex={index}
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
