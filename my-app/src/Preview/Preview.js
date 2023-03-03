import { useContext, useEffect, useState } from "react";
import { Document, PDFViewer } from '@react-pdf/renderer';

import { GlobalContext } from "../GlobalContext";
import { SheetContext } from "../SheetContext";

import axios from "axios"; // For API post request

import "./Preview.scss";

const Preview = () => {
    const Sheet = () => (
        <Document>
            {pdfUrl}
        </Document>
    );
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
         // Race
         raceName,
         // General
         currentImage,
         formValues,
         selectedReligion,
         // Ways
    } = useContext(SheetContext);

    const [pdfUrl, setPdfUrl] = useState(null);

    const handleGeneration = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'sheet.pdf');
        document.body.appendChild(link);
        link.click();
    };

    useEffect(() => {       
        const sheetData = {
            character_name: formValues.firstName + " " + formValues.lastName,
            race_name: raceName,
            religion_name: "Fromage", // A dynamiser quand la religion sera récupérable de l'API
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
            way_abilities: [12, 13], // A dynamiser quand l'id des compétences de voies choisies seront implémentées dans le JSON
            racialAbility: 6 // A dynamiser quand l'id de la compétence raciale choisie sera implémentée dans le JSON
        };
        console.log(sheetData);
        axios.post("http://localhost:8080/api/generator", sheetData, {responseType: 'arraybuffer'})
            .then((response) => {
                const blob = new Blob([response.data], {type: 'application/pdf'});
                const pdfUrl = window.URL.createObjectURL(blob);
                // window.open(pdfUrl);

                console.log(response);
            })
            .catch((error) => {
                // alert("Erreur API : Les données de la fiche n'ont pas pu être envoyées.");
                console.error(error);
            });
    });

    return(
        <div className="preview-container">
            <div className="preview">
                {/* <img className="preview-image" src="https://fakeimg.pl/250x450/EFC874/?text=Preview" alt="Prévisualisation de votre fiche de personnage" /> */}
                <PDFViewer>
                    <Sheet />
                </PDFViewer>
            </div>
            <div className="generate">
                <button className="generate-button" onClick={handleGeneration}>Générer ma fiche</button>
            </div>
        </div>
    );
};

export default Preview;