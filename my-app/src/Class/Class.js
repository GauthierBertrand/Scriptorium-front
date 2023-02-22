import SwiperCore, { Navigation, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

import "./../reset.css";

import "./Class.scss";

SwiperCore.use([ Navigation, Keyboard, Mousewheel ]);

const Class = () => {

    return (
        <div className="class-container">
            <h1 className="class-title">
                Classes
            </h1>

            <div className="class-img-container">
                <button className="equipment-button">
                    <img className="equipment-button-img" src="https://fakeimg.pl/20x20/000/" alt="Classe" />
                </button>
                <img className="class-img" src="https://fakeimg.pl/250x250/fff/" alt="Classe" />
                <div className="class-stat">
                    <div className="class-stat-name">
                        For
                    </div>
                    <div className="class-stat-name">
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
                    <div className="class-stat-name">
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
                loop={true}
                navigation={false}
                keyboard={true}
                mousewheel={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={10}>
                <div className="class-carrousel">
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/70x70/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/70x70/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/70x70/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/70x70/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="class-carrousel-item">
                            <img className="class-carrousel-img" src="https://fakeimg.pl/70x70/000/" alt="Classe" />
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Class;