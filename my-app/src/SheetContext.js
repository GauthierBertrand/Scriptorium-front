import { createContext, useState } from "react";

export const SheetContext = createContext({
    // Classes
    equipment: [],
    setEquipment: () => {},
    // General
    
});

const SheetProvider = (props) => {
    // Classes
    const [equipment, setEquipment] = useState([]);
    return (
        <SheetContext.Provider value={{
            // Classes
            equipment,
            setEquipment,
        }}>
            {props.children}
        </SheetContext.Provider>
    );
};

export default SheetProvider;