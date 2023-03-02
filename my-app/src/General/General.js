import { useSwipeable } from "react-swipeable";
import React, { useState, useContext } from "react";

import { SheetContext } from "../SheetContext";

import "./General.scss";
import "./Modal.scss";

import maleOrc from "../assets/images/male-orc.jpg";
import femaleOrc from "../assets/images/female-orc.png";
import mars from "../assets/images/mars.png";
import venus from "../assets/images/venus.png";

// TODO : Dynamiser les religions avec un axios

const General = ({religions}) => {
  const {
      currentImage,
      setCurrentImage,
      formValues,
      setFormValues,
      selectedReligion,
      setSelectedReligion,
    } = useContext(SheetContext);

  const [direction, setDirection] = useState(null);
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      setDirection(eventData.dir);
      setModalOpen(false);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleReligionChange = (event) => {
    const religionName = event.target.value;
    const religion = religions.find((religion) => religion.name === religionName);
    setSelectedReligion(religion);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleMaleClick = () => {
    setCurrentImage(maleOrc);
  };

  const handleFemaleClick = () => {
    setCurrentImage(femaleOrc);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Je n'ai pas encore décidé de ce que je ferai au submit
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <button className="general-button" onClick={handleOpenModal}>
      </button>
      {modalOpen && (
        <div className={`general-modal ${direction}`} {...handlers}>
          <div className="general-image" style={{ backgroundImage: `url(${currentImage})` }}>
            <div className="general-buttons">
              <img className="general-button-image" src={mars} onClick={handleMaleClick} alt="Symbole de mars signifiant une personne male"/>
              <img className="general-button-image" src={venus} onClick={handleFemaleClick} alt="Symbole de venus signifiant une personne femelle"/>
            </div>
          </div>
        </div>
      )}
      <div className="general-page">
        <form className="general-form">
          <div className="general-form-head">
            <div className="general-form-head-left">
              <input type="text" id="firstName" name="firstName" placeholder="Prénom" value={formValues.firstName} onChange={handleChange} />
              <input type="text" id="lastName" name="lastName" placeholder="Nom" value={formValues.lastName} onChange={handleChange} />
              <input type="text" id="eyeColor" name="eyeColor" placeholder="Couleur des yeux" value={formValues.eyeColor} onChange={handleChange} />
            </div>
            <div className="general-form-head-right">
              <img className="selected-image" src={currentImage} alt="image du sexe sélectionné" />
            </div>
          </div>
          <div className="general-form-right">
            <div className="general-form-row">
              <div>
              <input className="general-form-row-input" type="text" id="age" name="age" placeholder="Âge" value={formValues.age} onChange={handleChange} />
              <input className="general-form-row-input" type="text" id="height" name="height" placeholder="Taille en cm" value={formValues.height} onChange={handleChange} />
              <input className="general-form-row-input" type="text" id="weight" name="weight" placeholder="Poids en kg" value={formValues.weight} onChange={handleChange} />
              </div>
              <input className="general-form-row-input" type="text" id="hairColor" name="hairColor" placeholder="Couleur des cheveux" value={formValues.hairColor} onChange={handleChange} />
            </div>
          </div>
        </form>
        <div className="religion-box">
      <div className="religion-header">
          Religion:  
        <select className="religion-dropdown" onChange={handleReligionChange}>
          {/* {religions.map((religion) => (
            <option key={religion.name} value={religion.name}>
              {religion.name}
            </option>
          ))} */}
        </select>
      </div>
      <div className="religion-description">{selectedReligion?.description}</div>
      <div className="backstory-box">
        <textarea className="backstory-input" id="backstory" name="backstory" placeholder="Entrez votre histoire ici" value={formValues.backstory} onChange={handleChange} />
      </div>
    </div>
      </div>

  </>
  );
};

export default General;
