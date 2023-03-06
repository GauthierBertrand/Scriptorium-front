import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import './BurgerMenu.scss';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    Cookies.remove('token');
    setUser(null);
    setOpen(false);
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(false);
  };

  const handleShowSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(false);
  };

  const isLoggedIn = user != null;
  return (
    <div>
      <nav className="navbar">
        <div className="menu">
          {user ? (
            <div className="user-info">{`${user.pseudo}`}</div>
          ) : (
            <div className="auth-buttons">
              <button type="button" onClick={handleShowLoginForm}>
                Connexion
              </button>
              <button type="button" onClick={handleShowSignUpForm}>
                Inscription
              </button>
            </div>
          )}
        </div>
        {isLoggedIn && (
        <div className="burger" onClick={handleBurgerClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      )}
      </nav>
      {showLoginForm && <LoginForm onSuccess={() => setShowLoginForm(false)} />}
      {showSignUpForm && <SignUpForm onSuccess={() => setShowSignUpForm(false)} />}
      <div className={`burger-menu ${open ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/fiches">Mes fiches</Link>
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
