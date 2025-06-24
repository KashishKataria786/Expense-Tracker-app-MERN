import { createContext, useEffect, useState } from "react";
import OfflineBanner from "../components/OfflineBanner";

export const Internet_Status_Context =  createContext();


export const Internet_Status_Provider = ({children})=>{

    const [isOnline,setIsOnline] = useState(navigator.onLine);

    const handleOnlineStatus = ()=>{
        setIsOnline(navigator.onLine);
    }

    useEffect(()=>{
       

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline',handleOnlineStatus);

        return()=>{
            window.removeEventListener('online',handleOnlineStatus);
            window.removeEventListener('offline',handleOnlineStatus);
        }
    },[])

    return(
        <Internet_Status_Context.Provider value={{isOnline}}>
            {!isOnline && <OfflineBanner/>}
            {children}
        </Internet_Status_Context.Provider>
    )

}