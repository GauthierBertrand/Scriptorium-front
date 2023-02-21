import "./Race.scss";

import Frame from "./Frame/Frame";
import races from './datas/tableau-races.js';

function Race() {

    return(
        <div className="races-container">
            <h1 className="races-title">
                Races
            </h1>
            <div className="races-frames">
                {races.map((race, index) => (
                    <Frame
                        key={index}
                        name={race.name}
                        description={race.description}
                        picture={race.picture}
                        bonus1={race.bonus1}
                        bonus2={race.bonus2}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Race;