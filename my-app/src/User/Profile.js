import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../UserContext';
import { useEffect } from 'react';
import axios from 'axios';
import './Profile.scss';


const Profile = () => {
    const { 
      user,
    } = useContext(UserContext);

    const token = Cookies.get('token');

    const [sheetsList, setSheetsList] = useState([]);

  useEffect (() => {
    axios.get("http://localhost:8080/api/characters/users", {
      headers: {
        "Authorization":  `Bearer ${token}`
      }})
    .then((response) => {
      const sheetsData = response.data.sheets;
      console.log(sheetsData);
      setSheetsList(sheetsData);
    })
  }, []);

  return ( 
    <div className="sheet-container">
      <h1>Mes fiches enregistrées</h1>
      <div className="sheet-list">
        {sheetsList.map((sheet, index) => (
          <div className="sheet" key={index}>
            <div className="sheet-infos">
              <div className="sheet-picture">
                <img className="character-picture" src={sheet.picture} alt="Portrait du personnage" height={80} /> {/* height to disable once the picture is really dynamic*/}
              </div>
              <div className="sheet-name">
                {sheet.character_name}
              </div>
              <div className="sheet-race">
                {sheet.race_name}
              </div>
              <div className="sheet-class">
                {sheet.classe.name}
              </div>
            </div>
            <div className="sheet-actions">
              <button className="sheet-button">
                <img src="https://fakeimg.pl/20x20/000/?text=DL" alt="Télécharger la fiche" />
              </button>
              <button className="sheet-button">
                <img src="https://fakeimg.pl/20x20/000/?test=EDIT" alt="Modifier la fiche" />
              </button>
              <button className="sheet-button">
                <img src="https://fakeimg.pl/20x20/000/?text=SUPP" alt="Supprimer la fiche" />
              </button>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
