import React from 'react'

function ProjectsCard(props) {
    return (
        <div className="ProjectCard-body">
            {props.names.map(name => (
               <h2>{name}</h2>

            ))}
           

        </div>
    )
}

export default ProjectsCard
