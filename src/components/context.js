import React, { useState } from "react";
import axios from "axios";
export const SpaceXContext = React.createContext()
export function SpaceXContextProvider({ children }) {
    const [capsuleData, setCapsuleData] = useState([])
    const [searchval, setSearchval] = useState('');
    //pagination
    const [currentpage, setcurrentpage] = useState(1)//1,2,3
    const [Itemperpage, setItemperpage] = useState(4)//how many items per page
    const getdata = async () => {
        const response = await axios.get('https://api.spacexdata.com/v3/capsules')
        return response.data
    }
    //console.log(Itemperpage)
    const value = {
        capsuleData,
        setCapsuleData,
        currentpage, setcurrentpage,
        Itemperpage, setItemperpage,
        getdata,
        searchval, setSearchval
    }
    return (
        <SpaceXContext.Provider value={value}>
            {children}
        </SpaceXContext.Provider>
    )
}
