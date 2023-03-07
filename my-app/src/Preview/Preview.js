import { useContext, useEffect, useState } from "react";
import { PDFViewer } from '@react-pdf/renderer';

import { GlobalContext } from "../GlobalContext";
import { SheetContext } from "../SheetContext";

import Sheet from "./Sheet";

import axios from "axios";

import "./Preview.scss";

const Preview = () => {
    const {
        // Classes
        classId,
        // Races
        selectedRaceAbility,
        // Stats
        secondaryStats,
        finalPrimaryStats,
        // Ways
    } = useContext(GlobalContext);

    const {
         // Classes
         equipment,
         // Races
         raceName,
         selectedRaceAbilityId,
         // General
         currentImage,
         formValues,
         selectedReligion,
         // Ways
        selectedWayAbilityId

    } = useContext(SheetContext);

    const [pdfUrl, setPdfUrl] = useState(null);
    const [numPage, setNumPage] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPage(numPages);
    };

    const handleGeneration = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'fiche.pdf');
        document.body.appendChild(link);
        link.click();
    };

    useEffect(() => {    
        console.log(selectedWayAbilityId);   
        const sheetData = {
            character_name: formValues.firstName + " " + formValues.lastName,
            race_name: raceName,
            religion_name: "Fromage", // A dynamiser quand la religion sera récupérable de l'API (vide pour l'instant)
            description: formValues.backstory,
            age: Number(formValues.age),
            level: 1,
            picture: currentImage,
            height: Number(formValues.height),
            weight: Number(formValues.weight),
            hair: formValues.hairColor,
            eyes: formValues.eyeColor,
            stats: {
                Dextérité: finalPrimaryStats.DEX,
                Constitution: finalPrimaryStats.CON,
                Force: finalPrimaryStats.FOR,
                Charisme: finalPrimaryStats.CHA,
                Sagesse: finalPrimaryStats.SAG,
                Intelligence: finalPrimaryStats.INT,
            },
            user: null,
            classe: classId,
            way_abilities: selectedWayAbilityId, // WIP : Tableau avec 2 valeurs, voir comment les assigner correctement
            racialAbility: selectedRaceAbilityId
        };
        console.log(sheetData);
        axios.post("http://localhost:8080/api/generator", sheetData, {responseType: 'arraybuffer', headers: {'accept': 'application/json'}})
            .then((response) => {
                const blob = new Blob([response.data], {type: 'application/pdf'});
                setPdfUrl(URL.createObjectURL(blob));
                // window.open(pdfUrl);
                console.log(pdfUrl);

                console.log(response);
            })
            .catch((error) => {
                // alert("Erreur API : Les données de la fiche n'ont pas pu être envoyées.");
                console.error(error);
            });
    }, []);

    return (
        <div className="preview-container">
            <div className="preview">
                {/* <img className="preview-image" src="https://fakeimg.pl/250x450/EFC874/?text=Preview" alt="Prévisualisation de votre fiche de personnage" /> */}
                {pdfUrl &&
                <PDFViewer>
                    <Sheet pdfUrl={pdfUrl} onDocumentLoadSuccess={onDocumentLoadSuccess}/>
                </PDFViewer>
                }
            </div>
            <div className="generate">
                <button className="generate-button" onClick={handleGeneration}>Générer ma fiche</button>
            </div>
        </div>
    );
};

export default Preview;