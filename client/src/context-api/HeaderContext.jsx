import { createContext, useState } from "react";


export const HeaderContext = createContext();

const HeaderProvider= ({children})=>{
    const [headerOpen, setHeaderOpen]= useState(false);

    const toggleHeaderState = ()=>{
        setHeaderOpen(!headerOpen);
    }

    return(
        <HeaderContext.Provider value={{ headerOpen, toggleHeaderState}}    >
            {children}
        </HeaderContext.Provider>
     )
}



export default HeaderProvider;