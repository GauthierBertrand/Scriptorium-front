import { useState } from "react";
import "./../reset.css";
import "./Way.scss";
import imageTest from "./arrow.png";

const Way = () => {

    const [descriptionOpen, setDescriptionOpen] = useState(false);

    const handleOpenDescription = () => {
        setDescriptionOpen(!descriptionOpen);
    }

return (
    <>
    <div className="stats-header">
        <div className="stats-header-mod">
            <div className="stat-info">
                For
                <div className="stat-mod">+2</div>
            </div>
            <div className="stat-info">
                For
                <div className="stat-mod">+2</div>
            </div>
            <div className="stat-info">
                For
                <div className="stat-mod">+2</div>
            </div>
            <div className="stat-info">
                For
                <div className="stat-mod">+2</div>
            </div>
            <div className="stat-info">
                For
                <div className="stat-mod">+2</div>
            </div>
            <div className="stat-info">
                For
                <div className="stat-mod">+2</div>
            </div>
        </div>
        <div className="stats-header-other">
            <div className="stat-atk">
                <div className="stat-type atk">
                    <img src={imageTest} alt="Type d'attaque" />
                    <div className="stat-type-value">12</div>
                </div>
                <div className="stat-type atk">
                    <img src={imageTest} alt="Type d'attaque" />
                    <div className="stat-type-value">12</div>
                </div>
                <div className="stat-type atk">
                    <img src={imageTest} alt="Type d'attaque" />
                    <div className="stat-type-value">12</div>
                </div>
            </div>
            <div className="stat-def">
                <div className="stat-type def">
                    <img src={imageTest} alt="Type de défense" />
                    <div className="stat-type-value">12</div>
                </div>
                <div className="stat-type def">
                    <img src={imageTest} alt="Type de défense" />
                    <div className="stat-type-value">12</div>
                </div>
            </div>
        </div>
        <div className="way-points">
            <button className="remaining-points">2</button>
            <div className="remaining-points-text">points disponibles</div>
        </div>
    </div>
    
    <div className="way-container">
        <div className="way-name">
            Nom de la voie
        </div>
            <button className={`race ${descriptionOpen ? "way-button hidden" : "way-button"}`}
                    onClick={handleOpenDescription}>
                        &#9207;
            </button>
        {descriptionOpen && (
            <>
            <div className="way-ability">
                <div className="way-ability-name">
                    Nom de la compétence de voie
                </div>
                <div className="way-ability-description">
                    Description de la compétence de voie
                </div>
                <div className="way-ability-bonus">
                    Bonus de la compétence de voie
                </div>
            </div>
            <button className="way-button open"
                onClick={handleOpenDescription}>
                    &#9207;
            </button>
            </>
        )}
        {!descriptionOpen && (
            <div className="way-changes-container">
                <h3 className="changes-summary">
                    Résumé des changements :
                </h3>
                <div className="way-changes">
                    <img src={imageTest} alt="Logo décoratif des changements"/>
                    <p className="feature-changing">
                        Discrétion +5
                    </p>
                </div>
            </div>
        )}

        <button className="way-slide left">&lt;</button>
        <button className="way-slide right">&gt;</button>
    </div>
   </>
);
};

export default Way;