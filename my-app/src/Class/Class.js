import { useState, useEffect } from "react";

import SwiperCore, { Navigation, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

import "./../reset.css";

import "./Class.scss";

SwiperCore.use([ Navigation, Keyboard, Mousewheel ]);

const Class = () => {
    const [equipmentModal, setEquipmentModal] = useState(false);
    const [classes, setClasses] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [classesStats, setClassesStats] = useState([]);
    const [selectedClass, setSelectedClass] = useState(0);

    const handleToggleEquipment = () => {
        setEquipmentModal(!equipmentModal);
    };
    
    const handleSelectClass = (index) => {
        setSelectedClass(index);
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/classes")
        .then((response) => {
            const classData = response.data.classes;
            console.log(classData);
            setClasses(classData);
            const statsData = classData.map((classObject) => ({
                class: classObject.name,
                stat: Object.entries(classObject.stats).map((stat) => ({
                    name: stat[0],
                    isRecommended: stat[1]
                })),
            }));
            setClassesStats(statsData);
            const equipmentData  = classData.map((classObject) => (
                classObject.equipments
            ));
            setEquipment(equipmentData);
        })
        .catch((error) => {
            alert("Erreur API : Les données des classes n'ont pas pu être récupérées.");
            console.error(error);
        })
    }, []);

    return (
        
        <div className="class-container">
            <h1 className="class-title">
                Classes
            </h1>

            <div className="class-img-container">
                <button className="equipment-button" onClick={handleToggleEquipment}>
                    <img className="equipment-button-img" src="https://fakeimg.pl/30x30/000/" alt="Classe" />
                </button>
                {equipmentModal && (
                    <div className="equipment-container">
                    {equipment[selectedClass].map((equipment, index) => (
                        <div className="equipment-item" key={index}>
                            <div className="equipment-item-title" key={index}>
                                <img className="equipment-item-title-img" src="https://fakeimg.pl/30x30/000/" alt="Classe" />
                                <p className="equipment-item-title-name">{equipment.name} x{equipment.number}</p>
                            </div>
                            <p className="equipment-item-description">{equipment.description}</p>
                    </div>
                    ))}
                    </div>
                )}
                <img className="class-img" src="https://fakeimg.pl/1000x800/EFC874/" alt="Classe" />
                {classesStats[selectedClass] && (
                    <div className="class-stat">           
                        {classesStats[selectedClass].stat.map((statObj, index) => (
                            <div className={statObj.isRecommended ? "class-stat-name recommended" : "class-stat-name"}
                                key={index}>
                                    {statObj.name.substr(0, 3)}
                            </div>  
                        ))}
                    </div>
                )}
            </div>

            <div className="class-description">
            {classes[selectedClass] && (
                <p className="class-description-text">
                    {classes[selectedClass].description}
                </p>
            )}
            </div>

            <Swiper
                className="class-carrousel"
                loop={true}
                keyboard={true}
                mousewheel={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={3}
                onSlideChange={(swiper) => {handleSelectClass(swiper.realIndex)}}>
                {classes.map((classObj) => (
                    <SwiperSlide key={classObj.id}>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src={classObj.picture} alt="Classe" />
                            <p>{classObj.name} </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Class;