import React, { useState } from 'react'
import ProfilePic from "../../Assets/Profile-Pic.jpg"
import Linkedin from "../../Assets/linkedin-icon.png"
import Instagram from "../../Assets/insta-icon.png"
import Github from "../../Assets/github-icon.png"
import { Document, Page } from "react-pdf"
import "./About.css"
function About() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    return (
        <div>
            <article className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="AboutCard">
                            <div className="card-header">
                                About Me
                            </div>
                            <div className="card-body">
                                <p><img className="profile-pic" src={ProfilePic} alt="Picture of Mario Lavina" /> Hello, my name is Mario Jesus Lavina. I was born and raised in the beautiful sunshine state of Florida, Miami to be specific.
                                I moved to Denver, Colorado at the beginning of 2020 to start a new chapter of my life and experience a different city.
                                I ‘ve worked as a bartender for 8 years and had most of my time behind craft cocktail bars. However, with COVID -19, it has opened my eyes to what jobs have stability and which ones do not.
                                I am currently attending Denver University Coding Bootcamp and hope to begin a new chapter in my career life in Web Development.
                                <br />
                                <br />
                                Some hobbies that I love to indulge in is gardening, playing video games and cooking or coming up with fun and delicious cocktails.
                                Some of my favorite plants that I have had the opportunity to grow include, passionfruit, mint and shishito peppers.
                                The one video game that I love and put a lot of hours into is called Ghost of Tsushima.
                                And my favorite dishes to make is Boliche ( a Cuban styled stuffed pot roast) and my favorite cocktail would have to be a Zombie.
                                <br />
                                </p>
                                <Document file="Entry Level Web Developer.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pageNumber} />
                                </Document>
                                <p>Page {pageNumber} of {numPages}</p>
                            </div>
                        </div>
                        <div className="AboutCard">
                            <div className="card-header">
                                Find me on Social Media:
                            </div>
                        </div>
                        <div className="card-body2">
                            <a href="https://www.linkedin.com/in/mario-lavina-2823086a/" target="_blank"><img className="icon" src={Linkedin} alt="LinkedInIcon" /></a>
                                <a href="https://www.instagram.com/mariolavina1991/" target="_blank"><img className="icon" src={Instagram} alt="InstagramIcon" /></a>
                                    <a href="https://github.com/Lavina91" target="_blank"><img className="icon" src={Github} alt="Github Icon" /></a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default About
