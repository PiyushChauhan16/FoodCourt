import { useEffect } from "react";
import { useState } from "react";
import React from "react";

const useOnlineStatus = () => {
    let [onlineStatus, setOnlineStatus] = useState (navigator.onLine);

    useEffect (()=>{
        window.addEventListener ("offline", ()=>{
            setOnlineStatus (false);
        })

        window.addEventListener ("online", ()=>{
            setOnlineStatus (true);
        })
    }, [])
    
    return onlineStatus;
}

export default useOnlineStatus;