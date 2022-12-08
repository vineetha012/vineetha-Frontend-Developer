import axios from "axios";
import React, { useContext, useEffect } from "react";
import { CardContainer } from "./cardContainer";
import { SpaceXContext } from "./context";
import { Pagination } from "./Pagination";
import { SearchContainer } from "./SearchContainer";
import { Banner } from "./banner";
export const LandingPage = () => {
    const { getdata, capsuleData, setCapsuleData,searchval } = useContext(SpaceXContext)
    useEffect(() => {
        getdata().then((res) => {
            setCapsuleData(res)
        }
        )

    }, [])
    //console.log(capsuleData)
    return (
        <>   <Banner/>
            <SearchContainer />
            <CardContainer />
            <div className="pageNumbersContainer">
                {searchval ? "" : <Pagination />}
            </div>
        </>
    )
}