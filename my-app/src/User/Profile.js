import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../UserContext';
import { useEffect } from 'react';
import axios from 'axios';


const Profile = () => {
    const { 
      user,
    } = useContext(UserContext);

    const token = Cookies.get('token');

  useEffect (() => {
    axios.get("http://localhost:8080/api/characters/users", {
      headers: {
        "Authorization":  `Bearer ${token}`
      }})
    .then((response) => {
      const sheetsData = response.data;
      console.log(sheetsData);
    })
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/classes');
  };

  return (
    <div className="sheet-container">
      <h1>Mes fiches enregistrées</h1>
      <div className="sheet-list">
        <div className="sheet">
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
