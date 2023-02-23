import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Frame.scss";

function Frame({name, description, picture, bonus1, bonus2}) {
    const [expanded, setExpanded] = useState(false);
    const [selectedRace, setSelectedRace] = useState("");
    const [selectedBonus, setSelectedBonus] = useState("");

    const handlers = useSwipeable({
      onSwipedRight: (eventData) => {
        setExpanded(!expanded);
        // console.log("User Swiped Right !", eventData);
      },
      delta: 200
      }
    );

    const handleRaceClick = (name) => {
        setSelectedRace(name);
        setExpanded(!expanded);

        if (!expanded) {
          setSelectedBonus("");
        }
      };

    const handleBonusClick = (bonus) => {
      if (selectedBonus !== bonus) {
        setSelectedBonus(bonus);
      } else {
        setSelectedBonus("");
      }
    };

    return (
        <div className={`race ${expanded ? "expanded" : ""}`}>
            {/* Créer une className sur le race-header pour l'étirer jusqu'au bout de l'écran quand on clique dessus
                Créer des className hidden sur le race-header pour cacher les autres races au clic sur l'une d'elle
                Chercher comment faire le slide
                 */}
            <div className="race-header" onClick={() => handleRaceClick (name)} {...handlers}>
                <img className="race-picture" src={picture} alt={name}/>
                <h3 className="race-title">{name}</h3>
            </div>
            
        {expanded && name === selectedRace && (
            <div className="race-content">
                <p>{description}</p>
                <div className="race-bonuses">
                {bonus1 && (
                    <button
                    className={`race-bonus ${
                        selectedBonus === bonus1 ? "selected" : ""
                    }`}
                    onClick={() => handleBonusClick(bonus1)}
                    >
                    {bonus1}
                    </button>
                )}
                {bonus2 && (
                    <button
                    className={`race-bonus ${
                        selectedBonus === bonus2 ? "selected" : ""
                    }`}
                    onClick={() => handleBonusClick(bonus2)}
                    >
                    {bonus2}
                    </button>
                )}
                </div>
            </div>
        )}
      </div>
        
    );
}

export default Frame;