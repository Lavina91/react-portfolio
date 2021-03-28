import React from 'react';
import IssLocator from "../../Assets/project1.png";
import weatherPlanner from "../../Assets/weather-planner.png";
import adventureOps from "../../Assets/adventureOps.png";
import burger from "../../Assets/burger.png"
import "./Portfolio.css"


function Portfolio() {
    return (
        <>
            <div className="portfolioCardBody">
                <h2 className="iss-locator">Iss Locator</h2>
                <a className="links" href="https://tika27.github.io/SpaceEvent.location/"> Link to deployed application</a>
                <a className="links" href="https://adventureops.herokuapp.com/login"> Link to Github Page </a>
                <img className="projectPic" src={IssLocator} alt="home page of the Iss Locator application"></img>

                <h2 className="weather-planner"> Weather Planner</h2>
                <a className="links" href="https://lavina91.github.io/Weather-Planner/"> Link to deployed application</a>
                <a className="links" href="https://github.com/Lavina91/Weather-Planner"> Link to Github Page </a>
                <img className="projectPic" src={weatherPlanner} alt="home page of the Weather Planner application"></img>

                <h2 className="adventureOps">AdventureOps</h2>
                <a className="links" href="https://adventureops.herokuapp.com/login"> Link to deployed application</a>
                <a className="links" href="https://github.com/Perkyderm/Adventureops"> Link to Github Page </a>
                <img className="projectPic" src={adventureOps} alt="login screen of the adventureOps application"></img>

                <h2 className="burger">Make and Eat Burger</h2>
                <a className="links" href="https://secure-ridge-91792.herokuapp.com/"> Link to deployed application</a>
                <a className="links" href="https://github.com/Lavina91/make_and_eat_burger"> Link to Github Page </a>
                <img className="projectPic" src={burger}></img>
            </div>
        </>
    )
}

export default Portfolio
