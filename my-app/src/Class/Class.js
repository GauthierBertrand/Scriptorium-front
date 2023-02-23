import { useState, useEffect } from "react";

import SwiperCore, { Navigation, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

import "./../reset.css";

import "./Class.scss";

SwiperCore.use([ Navigation, Keyboard, Mousewheel ]);

const Class = () => {
    const [equipment, setEquipment] = useState(false);

    const handleToggleEquipment = () => {
        setEquipment(!equipment);
    };

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/classes")
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         alert("Erreur API : Les données des classes n'ont pas pu être récupérées.");
    //         console.error(error);
    //     })
    // }, []);

    return (
        <div className="class-container">
            <h1 className="class-title">
                Classes
            </h1>

            <div className="class-img-container">
                <button className="equipment-button" onClick={handleToggleEquipment}>
                    <img className="equipment-button-img" src="https://fakeimg.pl/30x30/000/" alt="Classe" />
                </button>
                {equipment && (
                    <div className="equipment-container">
                    {/*Map le tableau des équipements*/}
                        <div className="equipment-item">
                            <img className="equipment-item-img" src="https://fakeimg.pl/30x30/0f0/" alt="Classe" />
                            <p className="equipment-item-name">Nom de l'équipement</p>
                            <p className="equipment-item-description">Description de l'équipement Description de l'équipement</p>
                        </div>
                        <div className="equipment-item">
                            <img className="equipment-item-img" src="https://fakeimg.pl/30x30/0f0/" alt="Classe" />
                            <p className="equipment-item-name">Nom de l'équipement</p>
                            <p className="equipment-item-description">Description de l'équipement Description de l'équipement</p>
                        </div>
                        <div className="equipment-item">
                            <img className="equipment-item-img" src="https://fakeimg.pl/30x30/0f0/" alt="Classe" />
                            <p className="equipment-item-name">Nom de l'équipement</p>
                            <p className="equipment-item-description">Description de l'équipement Description de l'équipement</p>
                        </div>
                    </div>
                )}
                <img className="class-img" src="https://fakeimg.pl/1000x800/f0f/" alt="Classe" />
                <div className="class-stat">
                {/*Map le tableau des stats*/}
                    <div className="class-stat-name">
                        For
                    </div>
                    <div className="class-stat-name recommended">
                        Dex
                    </div>
                    <div className="class-stat-name">
                        Con
                    </div>
                    <div className="class-stat-name">
                        Int
                    </div>
                    <div className="class-stat-name">
                        Sag
                    </div>
                    <div className="class-stat-name recommended">
                        Cha
                    </div>
                </div>
            </div>

            <div className="class-description">
                <p className="class-description-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.
                </p>
            </div>

            <Swiper
                className="class-carrousel"
                loop={true}
                keyboard={true}
                mousewheel={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={3}>
                {/*Map le tableau des classes pour générer les SwiperSlide*/}
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/90x90/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/90x90/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/90x90/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/90x90/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/90x90/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/90x90/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Class;