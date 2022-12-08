import React from "react";
import elonmusk from "../images/elonmusk1.jpg"
import banner from "../images/baner.jpg"
export const Banner = () => {
    return (
        <> <nav className='container-fluid navbar navbar-dark bg-dark bg-opacity-100 p-1'>
            <a className="navbar-brand" >
                <h1 className='row h1 text-light px-5 d-inline-block'>SpaceX</h1>
            </a>
            <ul class="navbar-nav mr-auto" style={{display:"flex",flexDirection:"row"}}>
            <li class="nav-item active" style={{marginLeft:"20px",border:"1px solid white",paddingLeft:"10px",paddingRight:"10px"}}>
                <a class="nav-link">Home</a>
            </li>
            <li class="nav-item active" style={{marginLeft:"20px",border:"1px solid white",paddingLeft:"10px",paddingRight:"10px"}}>
                <a class="nav-link">About</a>
            </li>
            <li class="nav-item active" style={{marginLeft:"20px",border:"1px solid white",paddingLeft:"10px",paddingRight:"10px"}}>
                <a class="nav-link">Service</a>
            </li>
            </ul>
            <button class="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
            <div className="banercont  bg-opacity-100 ">
                <img className="bannerimg" src={banner} />
                <div className="banertext border border-secondary">
                    <img src={elonmusk} style={{ width: "100px", height: "100px", borderRadius: "50%", marginLeft: "35%", marginBottom: "50px" }} />
                    <p className="text-light">SpaceX is an American spacecraft  launcher,
                        and a satellite communications corporation.
                        It was founded in 2002 by Elon Musk with the
                        stated goal of reducing space transportation
                        costs to enable the colonization of Mars.
                    </p>
                    <div className="bntcontainer"><button className="spacexbutton">SpaceX</button></div>
                </div>
            </div>

        </>
    )
}