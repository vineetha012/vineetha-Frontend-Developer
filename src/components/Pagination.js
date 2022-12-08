import React, { useEffect } from "react";
import { useContext } from "react";
import { SpaceXContext } from "./context";
export const Pagination = () => {
    const { capsuleData, setCapsuleData ,setcurrentpage} = useContext(SpaceXContext)
    
    const { Itemperpage} = useContext(SpaceXContext)
    const handlePageNumber=(pgnumber)=>{
        console.log(pgnumber)
        setcurrentpage(pgnumber)
    }
    const pages = []
        for (let i = 1; i <= Math.ceil(capsuleData.length / Itemperpage); i++) {
            pages.push(i)
         }
// console.log(capsuleData)
// console.log(Itemperpage)
    const renderpagenumbers = pages.map(pgnumber => {
        console.log(pgnumber)
            return (
                <button className="pagenums" type="submit" key={pgnumber}  id={pgnumber} onClick={()=>handlePageNumber(pgnumber)}  >
                    {pgnumber}
                </button>
            )
    })

    return(
        <div className="">
        {renderpagenumbers}
        </div>
    )
}
