import { useContext, useEffect } from "react";

import { GlobalContext } from "../GlobalContext";
import { SheetContext } from "../SheetContext";

import axios from "axios"; // For API post request

import "./Preview.scss";

const Preview = () => {
    const {
        // Classes
        classBonus,
        selectedClass,
        classesStats,
        // Races
        raceBonus,
        selectedRace,
        selectedRaceAbility,
        // Stats
        secondaryStats,
        statModifiers,
        stats,
        finalPrimaryStats,
        // Ways
    } = useContext(GlobalContext);

    const {
         // Classes
         equipment,
         // General
         currentImage,
         formValues,
         selectedReligion,
         // Ways
    } = useContext(SheetContext);

    const handleGeneration = () => {
        // La magie de la génération de fiche
    };

    useEffect(() => {
        
        const sheetData = {
            character_name: formValues.firstName + " " + formValues.lastName,
            // race_name: "",
            // religion_name: "",
            description: formValues.backstory,
            age: formValues.age,
            level: 1,
            picture: "",
            height: formValues.height,
            weight: formValues.weight,
            hair: formValues.hairColor,
            stats: {
                Dextérité: finalPrimaryStats.DEX,
                Constitution: finalPrimaryStats.CON,
                Force: finalPrimaryStats.FOR,
                Charisme: finalPrimaryStats.CHA,
                Sagesse: finalPrimaryStats.SAG,
                Intelligence: finalPrimaryStats.INT,
            },
            // classe: 1,
            // way_abilities: [1, 2],
            // racialAbility: 1
        };console.log(sheetData);
        // axios.post("http://localhost:3001/api/generator", sheetData)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         alert("Erreur API : La fiche n'a pas pu être générée.");
        //         console.error(error);
        //     });
    }, []);

    return(
        <div className="preview-container">
            <div className="preview">
                <img className="preview-image" src="https://fakeimg.pl/250x450/EFC874/?text=Preview" alt="Prévisualisation de votre fiche de personnage" />
            </div>
            <div className="generate">
                <button className="generate-button" onClick={handleGeneration}>Générer ma fiche</button>
            </div>
        </div>
    );
};

export default Preview;