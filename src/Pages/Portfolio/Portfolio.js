import React, { Component } from "react";
import ProjectCard from "../../Components/ProjectsCard/ProjectsCard"

class Portfolio extends Component {

    state = {
        name: ["Iss Locator", "Weather Planner", "AdventureOps", "Make and Eat Burger"],
        githubLinks: ["https://github.com/tika27/SpaceEvent.location", "https://github.com/Lavina91/Weather-Planner", "https://github.com/Perkyderm/Adventureops", "https://github.com/Lavina91/make_and_eat_burger"],
        appLinks: ["https://tika27.github.io/SpaceEvent.location/", "https://lavina91.github.io/Weather-Planner/", "https://adventureops.herokuapp.com/login", "https://secure-ridge-91792.herokuapp.com/"],
        images: ["../../Assets/project1.png", "../../Assets/weather-planner.png", "../../Assets/adventureOps", "../../Assets/burger.png"],
    }




    render() {
        return (

            <article className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ProjectCard">
                            <div className="ProjectCard-header">
                                Portfolio
                            </div>
                            <ProjectCard names={this.state.name} />
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Portfolio;