import { useEffect } from "react";
import React from 'react'

const useResMenu = (resId, setResData, setMenuData) => {

    async function fetchData (){
        const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7461247&lng=77.1160886&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData = await data.json ();

        console.log (jsonData);
        const reqResData = jsonData?.data?.cards[0].card.card.info;
        const reqMenuData = jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        console.log (reqMenuData);
        console.log (reqResData);

        setMenuData (reqMenuData);
        setResData (reqResData);

        
    }
    useEffect (()=>{
        fetchData ();
    }, [])

   
}

export default useResMenu