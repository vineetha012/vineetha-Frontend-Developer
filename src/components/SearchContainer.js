import React, { useContext, useEffect, useState } from "react";

import { SpaceXContext } from "./context";
export const SearchContainer = () => {
    const { setSearchval,searchval } = useContext(SpaceXContext)
    // console.log(searchval)

    return (
        <>
        
        <div className="search-container">
        <h1 style={{textAlign:"center",fontFamily:"sans-serif"}}>Filter the capsules here</h1>
        <div className="searchField">
        <div className="Type">
                <label style={{color:"white"}}>Search By Type</label>
                <select onChange={(e)=>setSearchval(e.target.value)}>
                    <option value="">ALL CAPSULES</option>
                    <option value="dragon 1.0">Dragon 1.0</option>
                    <option value="dragon 1.1">Dragon 1.1</option>
                    <option value="dragon 2.0">Dragon 2.0</option>
                </select>
            </div>
            <div div className="Type">
            <label style={{color:"white"}}>Search By Status</label>
                <select onChange={(e)=>setSearchval(e.target.value)}>
                    <option value="">ALL CAPSULES</option>
                    <option value="active">Active</option>
                    <option value="retired">retired</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
        </div>
            


        </div>
        </>
        
    )
}






















// const [type, setType] = useState("ALL")
// const { getdata } = useContext(SpaceXContext)
// //console.log(new Date());
// const handleDate = (e) => {
//     let str = e.target.value
//     console.log(str);
//     setInpdate(str)
// }
// useEffect(() => {
//     if (inpdate) {
//     }
//     else {
//         getdata()
//     }
// }, [inpdate])

// const dateSearch = () => {
//     if (inpdate) {
//         var capdata = []
//         capsuleData.map((data) => {
//             let str = data.original_launch
//             if (str != null) {
//                 let arr = str.split("T")
//                 let launchdate = arr[0]
//                 //console.log(launchdate);
//                 let flag = launchdate.includes(inpdate)
//                 if (flag == true) {
//                     capdata.push(data)
//                     console.log(capdata)
//                     setCapsuleData(capdata)
//                 }
//             }
//             console.log(data.status)
//         })
//     }

//     else {
//         getdata()
//     }
//     capdata = []
// }
// const  Handlechangetype=(e)=>{
// setType(e.target.value)
// }
// <div>
//                 <label>original Lounch date</label>
//                 <div className="search-cont">
//                     <input type="text" className="date Search" placeholder="yyyy-mm-dd" onChange={(e) => handleDate(e)} />
//                     <button className="searchbtn" onClick={dateSearch}>Search</button>
//                 </div>
//             </div>
//             <div></div>