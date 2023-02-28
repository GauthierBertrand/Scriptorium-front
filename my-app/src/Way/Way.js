import { useState, useEffect } from "react";

import SwiperCore, { Navigation, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

import "./../reset.css";
import "./Way.scss";

SwiperCore.use([ Navigation, Keyboard, Mousewheel ]);

const Way = () => {

    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [ways, setWays] = useState([]);
    const [selectedWayId, setSelectedWayId] = useState(0);
    const [selectedWayAbility, setSelectedWayAbility] = useState({
        name: "",
        description: "",
        bonus: null,
        cost: 0,
        level: 1,
        limited: false,
        traits: []
    });
    const [wayBonus, setWayBonus] = useState({
        FOR: 0,
        DEX: 0,
        CON: 0,
        INT: 0,
        SAG: 0,
        CHA: 0,
        INIT: 0,
        DEF: 0,
        PV: 0
    });

    const handleToggleDescription = () => {
        setDescriptionOpen(!descriptionOpen);
    }

    const handleSelectWay = (swiperId) => {
        setSelectedWayId(swiperId);
        console.log(ways[selectedWayId]);
    }

    const handleSelectAbility = (wayAbility) => {
        setSelectedWayAbility(wayAbility);
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/ways")
        .then((response) => {
            const waysData = response.data.ways;
            console.log(waysData);
            setWays(waysData);
        })
        .catch((error) => {
            alert("Erreur API : Les données des voies n'ont pas pu être récupérées.");
            console.error(error);
        })
    }, []);

    useEffect(() => {
        console.log(selectedWayAbility);
        let newWayBonus = {};
        if (selectedWayAbility.bonus !== null) {
            // console.log(selectedWayAbility.bonus);
            newWayBonus = {
                FOR: selectedWayAbility.bonus.FOR ? selectedWayAbility.bonus.FOR : 0,
                DEX: selectedWayAbility.bonus.DEX ? selectedWayAbility.bonus.DEX : 0,
                CON: selectedWayAbility.bonus.CON ? selectedWayAbility.bonus.CON : 0,
                INT: selectedWayAbility.bonus.INT ? selectedWayAbility.bonus.INT : 0,
                SAG: selectedWayAbility.bonus.SAG ? selectedWayAbility.bonus.SAG : 0,
                CHA: selectedWayAbility.bonus.CHA ? selectedWayAbility.bonus.CHA : 0,
                INIT: selectedWayAbility.bonus.INIT ? selectedWayAbility.bonus.INIT : 0,
                DEF: selectedWayAbility.bonus.DEF ? selectedWayAbility.bonus.DEF : 0,
                PV: selectedWayAbility.bonus.PV ? selectedWayAbility.bonus.PV : 0,
            };
        } else {
            newWayBonus = "Pas de bonus";
        }
        // console.log(newWayBonus);
        setWayBonus(newWayBonus);
        console.log(wayBonus);
        // if (typeof wayBonus === 'object' && wayBonus.bonus !== null) {
        //     Object.entries(wayBonus).map(([key, value]) => {
        //         console.log(key, value);
        //     })
        // };
    }, [selectedWayAbility]);

    return (
        <>
        <div className="stats-header">
            <div className="stats-header-mod">
                <div className="stat-info">
                    For
                    <div className="stat-mod">+2</div>
                </div>
            </div>
            <div className="stats-header-other">
                <div className="stat-atk">
                    <div className="stat-type atk">
                        <img src="https://fakeimg.pl/16/000" alt="Type d'attaque" />
                        <div className="stat-type-value">12</div>
                    </div>
                    <div className="stat-type atk">
                        <img src="https://fakeimg.pl/16/000" alt="Type d'attaque" />
                        <div className="stat-type-value">12</div>
                    </div>
                    <div className="stat-type atk">
                        <img src="https://fakeimg.pl/16/000" alt="Type d'attaque" />
                        <div className="stat-type-value">12</div>
                    </div>
                </div>
                <div className="stat-def">
                    <div className="stat-type def">
                        <img src="https://fakeimg.pl/16/000" alt="Type de défense" />
                        <div className="stat-type-value">12</div>
                    </div>
                    <div className="stat-type def">
                        <img src="https://fakeimg.pl/16/000" alt="Type de défense" />
                        <div className="stat-type-value">12</div>
                    </div>
                </div>
            </div>
            <div className="way-points">
                <button className="remaining-points">1</button>
                <div className="remaining-points-text">point disponible</div>
            </div>
        </div>

        <Swiper
            loop={true}
            navigation={false}
            keyboard={true}
            mousewheel={false}
            onRealIndexChange={(swiper) => {handleSelectWay(swiper.realIndex)}}>
            {ways.map((way) => (
                <SwiperSlide key={way.id}>
                    <div className="way-container">
                        <div className="way-name" onClick={handleToggleDescription}>
                            {way.name}
                        </div>
                        <button className={`race ${descriptionOpen ? "way-button hidden" : "way-button"}`}
                                onClick={handleToggleDescription}>
                                    &#9207;
                        </button>
                        
                    {descriptionOpen && (
                        way.wayAbilities.map((wayAbility, index) => (     
                            <div className="way-ability-container" key={index} onClick={() => {handleSelectAbility(wayAbility)}}> 
                                <div className="way-ability">
                                    <div className="way-ability-name">
                                        {wayAbility.name}
                                    </div>
                                    <div className="way-ability-description">
                                        {wayAbility.description}
                                    </div>
                                </div>
                                
                                <div className="way-ability-bonus">
                                    Bonus :
                                    {/* {
                                        Object.entries(wayBonus).map(([key, value]) => {
                                            console.log(key, value);
                                            return(key + " +" + value);
                                        })
                                    } */}
                                </div>
                                <button className="way-button open"
                                    onClick={handleToggleDescription}>
                                        &#9207;
                                </button>
                            </div>
                        ))   
                    )}
                                                        
                        {!descriptionOpen && (
                            <div className="way-changes-container">
                                <h3 className="changes-summary">
                                    Résumé des changements :
                                </h3>
                                <div className="way-changes">
                                    <img src="#" alt="Logo décoratif des changements"/>
                                    <p className="feature-changing">
                                        Discrétion +5
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
    );
};

export default Way;
