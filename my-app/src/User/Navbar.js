import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import './BurgerMenu.scss';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(false);
  };

  const handleShowSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="menu">
          {user ? (
            <div className="user-info">{`Logged in as ${user.username}`}</div>
          ) : (
            <div className='auth-buttons'>
              <button type="button" onClick={handleShowLoginForm}>
                Connexion
              </button>
              <button type="button" onClick={handleShowSignUpForm}>
                Inscription
              </button>
            </div>
          )}
        </div>
        <div className="burger" onClick={handleBurgerClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      {showLoginForm && <LoginForm onSuccess={() => setShowLoginForm(false)} />}
      {showSignUpForm && <SignUpForm onSuccess={() => setShowSignUpForm(false)} />}
      <div className={`burger-menu ${open ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#">Mes fiches</a>
          </li>
          <li>
            <a href="#">Paramètres</a>
          </li>
          <li>
            <a href="#">Mention légales</a>
          </li>
          {user && (
            <li>
              <a href="#" onClick={handleLogout}>
                Log Out
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
