import { createContext, useState } from "react";

import maleOrc from "./assets/images/male-orc.jpg";

export const SheetContext = createContext({
    // Races
    raceName: "",
    setRaceName: () => {},
    // Classes
    equipment: [],
    setEquipment: () => {},
    // General
    currentImage: "",
    setCurrentImage: () => {},
    formValues: {
        firstName: "",
        lastName: "",
        eyeColor: "",
        age: "",
        height: "",
        weight: "",
        hairColor: "",
        backstory: ""
    },
    selectedReligion: null,
    setSelectedReligion: () => {},
});

const SheetProvider = (props) => {
    // Races
    const [raceName, setRaceName] = useState("");
    // Classes
    const [equipment, setEquipment] = useState([]);
    // General
    const [currentImage, setCurrentImage] = useState(maleOrc); // Image par défaut à dynamiser
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        eyeColor: "",
        age: null,
        height: null,
        weight: null,
        hairColor: "",
        backstory: ""
    });
    const [selectedReligion, setSelectedReligion] = useState(null);
    return (
        <SheetContext.Provider value={{
            // Race
            raceName,
            setRaceName,
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
        }}>
            {props.children}
        </SheetContext.Provider>
    );
};

export default SheetProvider;