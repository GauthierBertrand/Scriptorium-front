import { useState, useEffect, useContext } from "react";

import SwiperCore, { Navigation, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { GlobalContext } from "./../GlobalContext";
import { SheetContext } from "./../SheetContext";

import axios from "axios";

import next from "../assets/images/next.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

import "./../reset.css";
import "./Way.scss";

SwiperCore.use([Navigation, Keyboard, Mousewheel]);

const Way = () => {
    const {
        classId,
        statModifiers,
        finalPrimaryStats,
        secondaryStats,
    } = useContext(GlobalContext);

    const {
        selectedWayAbilityId,
        updateSelectedWayAbilityId,
    } = useContext(SheetContext);

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
        traits: [],
        id: 0,
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
    const [selectedAbilityNames, setSelectedAbilityNames] = useState([]);
    const [selectedAbilityTraits, setSelectedAbilityTraits] = useState([]);
    const [remainingPoints, setRemainingPoints] = useState(2);



    const handleToggleDescription = () => {
        setDescriptionOpen(!descriptionOpen);
    }

    const handleSelectWay = (swiperId) => {
        setSelectedWayId(swiperId);
    }

    const handleSelectAbility = (wayAbility) => {

        setSelectedWayAbility(wayAbility);
        setSelectedWayAbilityId([wayAbility.id]);
        setSelectedWayAbilityId((prevSelectedWayAbilityId) => {
            if (!prevSelectedWayAbilityId.includes(wayAbility.id)) {
                // Ability is not already selected, add it to the array
                return [...prevSelectedWayAbilityId, wayAbility.id];
            }
        });
        console.log(selectedWayAbilityId);
      
        setSelectedAbilityNames((prevSelectedAbilityNames) => {
            if (prevSelectedAbilityNames.includes(wayAbility.name)) {
                // Ability is already selected, remove it and subtract its bonus from wayBonus
                setWayBonus((prevWayBonus) => ({
                    FOR: prevWayBonus.FOR - (wayAbility.bonus?.FOR || 0),
                    DEX: prevWayBonus.DEX - (wayAbility.bonus?.DEX || 0),
                    CON: prevWayBonus.CON - (wayAbility.bonus?.CON || 0),
                    INT: prevWayBonus.INT - (wayAbility.bonus?.INT || 0),
                    SAG: prevWayBonus.SAG - (wayAbility.bonus?.SAG || 0),
                    CHA: prevWayBonus.CHA - (wayAbility.bonus?.CHA || 0),
                    INIT: prevWayBonus.INIT - (wayAbility.bonus?.INIT || 0),
                    DEF: prevWayBonus.DEF - (wayAbility.bonus?.DEF || 0),
                    PV: prevWayBonus.PV - (wayAbility.bonus?.PV || 0),
                }));

                // Add the cost back to remaining points
                setRemainingPoints((prevPoints) => prevPoints + wayAbility.cost);

                return prevSelectedAbilityNames.filter((name) => name !== wayAbility.name);
            } else {
                // Ability is not selected, check if there are enough points before adding it
                if (remainingPoints >= wayAbility.cost) {
                    // Deduct the cost from remaining points
                    setRemainingPoints((prevPoints) => prevPoints - wayAbility.cost);

                    // Add the ability and its bonus to selected abilities and wayBonus
                    setWayBonus((prevWayBonus) => ({
                        FOR: prevWayBonus.FOR + (wayAbility.bonus?.FOR || 0),
                        DEX: prevWayBonus.DEX + (wayAbility.bonus?.DEX || 0),
                        CON: prevWayBonus.CON + (wayAbility.bonus?.CON || 0),
                        INT: prevWayBonus.INT + (wayAbility.bonus?.INT || 0),
                        SAG: prevWayBonus.SAG + (wayAbility.bonus?.SAG || 0),
                        CHA: prevWayBonus.CHA + (wayAbility.bonus?.CHA || 0),
                        INIT: prevWayBonus.INIT + (wayAbility.bonus?.INIT || 0),
                        DEF: prevWayBonus.DEF + (wayAbility.bonus?.DEF || 0),
                        PV: prevWayBonus.PV + (wayAbility.bonus?.PV || 0),
                    }));

                    return [...prevSelectedAbilityNames, wayAbility.name];
                } else {
                    // There are not enough points, do nothing
                    return prevSelectedAbilityNames;
                }
            }
        });

        setSelectedAbilityTraits((prevSelectedAbilityTraits) => {
            const trait = wayAbility.traits;

            // Check if the trait is already selected
            const isSelected = prevSelectedAbilityTraits.includes(trait);

            if (isSelected) {
                // Trait is already selected, remove it
                return prevSelectedAbilityTraits.filter((t) => t !== trait);
            } else {
                // Trait is not selected, add it
                return [...prevSelectedAbilityTraits, trait];
            }
        });
    };


    useEffect(() => {
        // Update selectedWayAbilityId after selectedAbilityNames has been updated
        updateSelectedWayAbilityId(selectedWayAbility.id);
    }, [selectedAbilityNames]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/ways/8`)
            // ${classId}
            .then((response) => {
                setWays(response.data.ways);
            })
            .catch((error) => {
                alert("Erreur API : Les données des voies n'ont pas pu être récupérées.");
                console.error(error);
            })
    }, []);


    return (
        <>
            <div className="stats-header">
                <div className="stats-header-mod">
                    {Object.entries(finalPrimaryStats).map((stat) => (
                        <div className="stat-info" key={stat}>
                            {stat[0]}
                            <div className="stat-mod">
                                {statModifiers[stat[0]] >= 0 ? "+" : ""}{statModifiers[stat[0]]}
                            </div>
                        </div>
                    ))}

                </div>
                <div className="stats-header-other">
                    {Object.entries(secondaryStats).map((stat) => (
                        <div className={stat[0] === "DIST" || stat[0] === "CAC" || stat[0] === "MAG" ? "stat-type atk" : "stat-type def"} key={stat}>
                            <img src="https://fakeimg.pl/20/747DEF/?text=PV" alt={stat[0]} />
                            <div className="stat-type-value">{stat[1]}</div>
                        </div>
                    ))}
                </div>
                <div className="way-points">
                    <button className="remaining-points">{remainingPoints}</button>
                    <div className="remaining-points-text">{remainingPoints > 1 ? "points disponibles" : "point disponible"}</div>
                </div>
            </div>

            <Swiper
                loop={true}
                navigation={false}
                keyboard={true}
                mousewheel={false}
                onSlideChangeTransitionEnd={(swiper) => { handleSelectWay(swiper.realIndex) }}>
                {ways.map((way) => (
                    <SwiperSlide key={way.id}>
                        <div className="way-container">
                            <div className="way-name" onClick={handleToggleDescription}>
                                {way.name}
                                <button className={`race ${descriptionOpen ? "way-button open" : "way-button"}`}
                                    onClick={handleToggleDescription}>
                                    &#9207;
                                </button>
                            </div>

                            {descriptionOpen && (
                                way.wayAbilities.map((wayAbility, index) => (
                                    <div className={`way-ability-container ${selectedAbilityNames.includes(wayAbility.name) ? 'selected' : ''}`} key={index} onClick={() => { handleSelectAbility(wayAbility) }}>
                                        <div className="way-ability">
                                            <div className="way-ability-name">
                                                {wayAbility.name}
                                                {wayAbility.limited && <>&nbsp;&#x24c1;</>}
                                            </div>
                                            <div className="way-ability-description">
                                                {wayAbility.description}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                            {!descriptionOpen && (
                                <div className="way-changes-container">
                                    <h3 className="changes-summary">
                                        Résumé des changements liés aux traits :
                                    </h3>
                                    <div className="way-changes">
                                        {/* <img src="#" alt="Logo décoratif des changements"/> */}
                                        <p className="feature-changing">
                                            {selectedAbilityTraits.map((trait, index) => (
                                                <span key={index}>
                                                    &bull; {trait}
                                                    {index !== selectedAbilityTraits.length - 1 && <br />}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link to="/apercu">
                <img
                    className="next-page"
                    src={next}
                    alt="Chevron pointing down for the next page"
                />
            </Link>
        </>


    );
};

export default Way;
