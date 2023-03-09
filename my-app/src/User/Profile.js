import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { SheetContext } from '../SheetContext';
import axios from 'axios';
import './Profile.scss';


const Profile = () => {
    const { 
      pdfUrl,
      setPdfUrl,
      setSelectedSheetId
    } = useContext(SheetContext);

    const token = Cookies.get('token');

    const [sheetsList, setSheetsList] = useState([]);
    const [refreshList, setRefreshList] = useState(false);

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
  }, [refreshList]);

  const handleDownload = (sheetId) => {
    axios.get(`http://localhost:8080/api/generator/sheet/${sheetId}`, {
      responseType: 'blob',
      headers: {
        "Authorization":  `Bearer ${token}`
      }})
        .then((response) => {
          console.log(response.data);
          const blob = new Blob([response.data], {type: 'application/pdf'});
          setPdfUrl(URL.createObjectURL(blob));
          console.log(pdfUrl);
          if (pdfUrl !== null) {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.setAttribute('download', `fiche${sheetId}.pdf`);
            document.body.appendChild(link);
            link.click();
            console.log(response);
          }
        })
        .catch((error) => {
          console.error(error);
    });
  };



  const handleEdit = (sheetId) => {
    setSelectedSheetId(sheetId);
    // axios.patch(`http://localhost:8080/api/characters/${sheetId}`, {
    //   responseType: 'json',
    //   headers: {
    //     "Authorization": `Bearer ${token}`
    //   }})
    //   .then((response) => {
    //     console.log(response.data);
    //   })
  };

  const handleDelete = (sheetId) => {
    axios.delete(`http://localhost:8080/api/characters/${sheetId}`, {
      responseType: 'json',
      headers: {
        "Authorization": `Bearer ${token}`
      }})
      .then((response) => {
        alert(response.data.message);
        console.log(response.data);
        setRefreshList(!refreshList);
      })
  };

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
              <button className="sheet-button" onClick={() => handleDownload(sheet.id)}>
                <img src="https://fakeimg.pl/20x20/000/?text=DL" alt="Télécharger la fiche" />
              </button>
              <button className="sheet-button" onClick={() => handleEdit(sheet.id)}>
                <Link to={`/general/edit/${sheet.id}`}>                  
                    <img src="https://fakeimg.pl/20x20/000/?test=EDIT" alt="Modifier la fiche" />
                </Link>
            </button>
              <button className="sheet-button" onClick={() => handleDelete(sheet.id)}>
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
