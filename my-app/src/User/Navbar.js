import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { GlobalContext } from '../GlobalContext';
import { SheetContext } from '../SheetContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const {
    setSelectedClass,
    setSelectedRace,
    setSelectedRaceAbility,
    setDiceRolls,
    setPrimaryStats,
    setSecondaryStats,
    setStats,
   } = useContext(GlobalContext);

  const {
    setSelectedRaceAbilityId,
    setCurrentImage,
    setFormValues,
    setSelectedReligion,
    setSelectedWayAbilityId,
    updateSelectedWayAbilityId,
    setPdfUrl,
    setSelectedSheetId
  } = useContext(SheetContext);
  const { user, setUser } = useContext(UserContext);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleLogout = () => {
    Cookies.remove('token');
    setUser(null);
    setOpenModal(false);
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(false);
  };

  const handleShowSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(false);
  };

  const clearStates = () => {
    // WIP : fonctionne à peu près sauf pour les informations générales
    //  (voir la fonction qui gère le préremplissage des inputs) et les way_abilities (cumul des valeurs dans le tableau)
    setSelectedClass(null);
    setSelectedRace(null);
    setSelectedRaceAbility(null);
    setDiceRolls(Array(6).fill(0));
    setPrimaryStats({ FOR: 0, DEX: 0, CON: 0, INT: 0, SAG: 0, CHA: 0 });
    setSecondaryStats({ PV: 0, INIT: 0, AC: 0, DIST: 0, CAC: 0, MAG: 0 });
    setStats(Array(6).fill(""));

    setSelectedRaceAbilityId(null);
    setCurrentImage("");
    setFormValues({
      firstName: "",
      lastName: "",
      eyeColor: "",
      age: "",
      height: "",
      weight: "",
      hairColor: "",
      backstory: ""
    });
    setSelectedReligion(null);
    setSelectedWayAbilityId([]);
    setPdfUrl(null);
    setSelectedSheetId(null);
  };

  const isLoggedIn = user != null;
  return (
    <div className="navbar-container">
      <div className="logo" onClick={clearStates}>
        <Link to="/classes">
          <img src="https://fakeimg.pl/40x40/000/?text=Logo" alt="Logo" />
        </Link>
      </div>
      <nav className="navbar">
        <div className="menu">
          {user ? (
            <div className="user-info">{`${user.pseudo}`}</div>
          ) : (
            <div className="auth-buttons">
              <button className="button" type="button" onClick={handleShowLoginForm}>
                Connexion
              </button>
              <button className="button" type="button" onClick={handleShowSignUpForm}>
                Inscription
              </button>
            </div>
          )}
        </div>
        {isLoggedIn && (
        <div className="burger" onClick={handleOpenModal}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        )}
      </nav>
      {showLoginForm && <LoginForm onSuccess={() => setShowLoginForm(false)} handleShowLoginForm={handleShowLoginForm} />}
      {showSignUpForm && <SignUpForm onSuccess={() => setShowSignUpForm(false)} handleShowSignUpForm={handleShowSignUpForm} />}
      <div className={`burger-menu ${openModal ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/profile">Mes fiches</Link>
          </li>
          <li>
            <Link to="/parametres">Paramètres</Link>
          </li>
          <li>
            <Link to="mentions-legales">Mentions légales</Link>
          </li>
          {user && (
            <li>
              <Link to="/classes" onClick={handleLogout}>
                Déconnexion
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
