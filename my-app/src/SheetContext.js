import { createContext, useState } from "react";

import maleOrc from "./assets/images/male-orc.jpg";

export const SheetContext = createContext({
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
        hairColor: ""
    },
    selectedReligion: null,
    setSelectedReligion: () => {},
});

const SheetProvider = (props) => {
    // Classes
    const [equipment, setEquipment] = useState([]);
    // General
    const [currentImage, setCurrentImage] = useState(maleOrc); // Image par défaut à dynamiser
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        eyeColor: "",
        age: "",
        height: "",
        weight: "",
        hairColor: ""
    });
    const [selectedReligion, setSelectedReligion] = useState(null);
    return (
        <SheetContext.Provider value={{
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