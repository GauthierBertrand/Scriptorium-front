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
        classId,
        classesStats,
        // Races
        raceBonus,
        selectedRace,
        selectedRaceAbility,
        raceName,
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
            race_name: raceName,
            religion_name: "Fromage", // A dynamiser quand la religion sera récupérable de l'API
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
            classe: classId,
            way_abilities: [1, 2], // A dynamiser quand l'id des compétences de voies choisies seront implémentées dans le JSON
            racialAbility: 1 // A dynamiser quand l'id de la compétence raciale choisie sera implémentée dans le JSON
        };
        console.log(sheetData);
        axios.post("http://localhost:8080/api/generator", sheetData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                alert("Erreur API : Les données de la fiche n'ont pas pu être envoyées.");
                console.error(error);
            });
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