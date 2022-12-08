import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SpaceXContext } from "./context";
import Popupdata from "./popUp";
import capsuleimg from "../images/capsule.png"
export const Card = ({ data }) => {
    const { capsuleData, setCapsuleData } = useContext(SpaceXContext)
    const [popupflag, setPopUpflag] = useState(false)
    const [popupcard, setPopUpCard] = useState("")
    const cardhandler = (e) => {
        //alert("clicked")
        console.log("id", e.target.id);

        setPopUpCard(e.target.id)
        setPopUpflag(true)

    }

    //console.log(capsuleData)
    console.log(data.capsule_serial)
    return (
        <div className="card-main">
            <div className="cardss" id={data.capsule_serial} onClick={(e) => cardhandler(e)} >
                <ul className="ul">
                    <label className="caplabel">Capsule serial : </label>
                    <div className="list">{data.capsule_serial}</div>
                </ul>
                <ul className="ul">
                    <label className="caplabel">type : </label>
                    <div className="list">{data.type}</div>
                </ul>

                <img src={capsuleimg} style={{ width: "298px", height: "250px" ,marginLeft:"50px"}} />
                <ul className="ul">
                    <label className="caplabel">Status : </label>
                    <div className="list">{data.status}</div>
                </ul>
                <div className="learnBtnContainer">
                <button className="learnmorebtn" id={data.capsule_serial} onClick={(e) => cardhandler(e)}>LEARN MORE </button>
                </div>
                <label className="caplabels">click this button to know more information</label>

            </div>
            {popupflag ? capsuleData.map((resdata) => {
                console.log("outside", popupcard)
                if (resdata.capsule_serial === popupcard) {
                    console.log("inside", popupcard)
                    return <Popupdata key={resdata.capsule_serial} setPopUpflag={setPopUpflag} resdata={resdata} />
                }
            }) : ''}
        </div>
    )
}
