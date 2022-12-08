import React from 'react'
function PopUp({ children }) {

  return (
    <main className='mainPopUp'>
      <div className='popupcard'>
        {children}
      </div>
    </main>
  )
}

export default function Popupdata({ resdata, setPopUpflag }) {
  return <PopUp>
    <div className="popupcontainer" >
      <h2 style={{ color: "rgb(151, 32, 99)" }}>Capsule : {resdata.capsule_serial} Capsule</h2>
      <div id={resdata.capsule_serial} className="popitem">
        {resdata.details ? <div className="popitem">Capsule Details:{resdata.details}</div> : ''}
        {/* <div className="list-group-item"><b>Capsule Id:</b> {resdata.capsule_id}</div> */}
        <div className="popitem">Capsule Serial :{resdata.capsule_serial}</div>
        <div className="popitem">Capsule Original Launch:  {resdata.original_launch}</div>
        <div className="popitem">Capsule Landing:  {resdata.landings}</div>
        <div className="popitem">Capsule Reuse Count:  {resdata.reuse_count}</div>
        <div className="popitem">Capsule Status:   {resdata.status}</div>
        <div className="popitem ">Capsule Type:   {resdata.type}</div>
        {
          (resdata.missions[0]) ? <div className="popitem">Capsule Mission Name: {resdata.missions[0].name}</div> : ''
        }
        {
          (resdata.missions[0]) ? <div className="popitem">Capsule Mission Name:{resdata.missions[0].flight}</div> : ''

        }
        <div className="status">Status :{resdata.status}</div>
      </div>

      <button className='backBtn' onClick={() => setPopUpflag(false)}>BACK</button>
    </div>
  </PopUp>
}