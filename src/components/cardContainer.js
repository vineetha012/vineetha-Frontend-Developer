import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Card } from "./card";
import { SpaceXContext } from "./context";
import { Pagination } from "./Pagination";
export const CardContainer=()=>{
    const {capsuleData,setCapsuleData,currentpage, setcurrentpage,Itemperpage,  searchval,setSearchval}=useContext(SpaceXContext)
    const { getdata}=useContext(SpaceXContext)
   
    const keys=["status","type"]
    const HandleSearch=(data)=>{
        return data.filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(searchval)))
       
    }
    const indexOfLastItem = currentpage * Itemperpage;
    const indexOfFirstItem = indexOfLastItem - Itemperpage;
    const currentItems=capsuleData.slice(indexOfFirstItem,indexOfLastItem)
    console.log(searchval)
    console.log(HandleSearch(capsuleData))
    return(
        <>
            <div className="cars-container">
                {searchval ? HandleSearch(capsuleData).map((data,key)=>{
                    console.log(data)
                    return(
                        <>
                        <Card key={data.capsule_serial} data={data} />
                        </>
                    )
                })
                :currentItems.map((data,key)=>{
                    return(
                        <>
                        <Card key={data.capsule_serial} currentItems={currentItems} data={data}/>
                        </>
                    )
                })
                }
            </div>
            
        </>
    )
}
