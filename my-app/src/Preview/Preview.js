import { useContext } from "react";

import { GlobalContext } from "../GlobalContext";
import { SheetContext } from "../SheetContext";

const Preview = () => {
    const {
        // Classes
        classBonus,
        setClassBonus,
        selectedClass,
        setSelectedClass,
        classesStats,
        setClassStats,
        handleSelectClass,
        handleClassBonus,
        // Races
        raceBonus,
        setRaceBonus,
        selectedRace,
        setSelectedRace,
        selectedRaceAbility,
        setSelectedRaceAbility,
        // Stats (generator)
        diceRolls,
        setDiceRolls,
        // Stats
        primaryStats,
        setPrimaryStats,
        secondaryStats,
        setSecondaryStats,
        statModifiers,
        setStatModifiers,
        stats,
        setStats,
        finalPrimaryStats,
        // Ways
    } = useContext(GlobalContext);

    const {
         // Classes
         equipment,
         setEquipment,
         // General
         currentImage,
         setCurrentImage,
         formValues,
         setFormValues,
         selectedReligion,
         setSelectedReligion,
         // Ways
    } = useContext(SheetContext);

    return(
        <div className="preview-container">

        </div>
    );
};

export default Preview;