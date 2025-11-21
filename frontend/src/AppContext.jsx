import {createContext, useState } from "react";
export const AppContext =  createContext();

export function
AppProvider({children}) {
    const [isOn, setIson] = useState(false);
    return (
        <AppContext.Provider value={{isOn , setIson}}>{children}</AppContext.Provider>
    );
}