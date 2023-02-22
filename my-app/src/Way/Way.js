// 
import { useState } from "react";

import SwiperCore, { Navigation, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

import "./../reset.css";
import "./Way.scss";

import imageTest from "./arrow.png";

SwiperCore.use([ Navigation, Keyboard, Mousewheel ]);

const Way = ({ stats, otherStats, points }) => {

    const [descriptionOpen, setDescriptionOpen] = useState(false);

    const handleToggleDescription = () => {
        setDescriptionOpen(!descriptionOpen);
    }

    return (
        <>
        <div className="stats-header">
        <div className="stats-header-mod">
            {stats.map((stat, index) => (
                <div className="stat-info" key={index}>
                    {stat.name}
                    <div className="stat-mod">{stat.mod}</div>
                </div>
            ))}
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
                <button className="remaining-points">{points}</button>
                <div className="remaining-points-text">points disponibles</div>
            </div>
        </div>
        
        <Swiper
            loop={true}
            navigation={false}
            keyboard={true}
            mousewheel={true}>
            <SwiperSlide>
                <div className="way-container">
                    <div className="way-name" onClick={handleToggleDescription}>
                        Nom de la voie
                    </div>
                        <button className={`race ${descriptionOpen ? "way-button hidden" : "way-button"}`}
                                onClick={handleToggleDescription}>
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
                            onClick={handleToggleDescription}>
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
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="way-container">
                    <div className="way-name" onClick={handleToggleDescription}>
                        Nom de la voie
                    </div>
                        <button className={`race ${descriptionOpen ? "way-button hidden" : "way-button"}`}
                                onClick={handleToggleDescription}>
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
                            onClick={handleToggleDescription}>
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
                </div>
            </SwiperSlide>
        </Swiper>
    </>
    );
};

export default Way;