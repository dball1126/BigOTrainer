import {Link} from 'react-router-dom';
import NavBar from '../nav/navbar';
import React from 'react';

const About = () => {
    return (
        <div className="homepage-container">
            <NavBar />
            <div className="homepage-body">
            <span>Every algorithm has a run time analysis where you can get a big picture idea of how fast it will run.
                  When the input is 10 billion versus 100 it becomes much more important to look at the worst case scenario,
                  because it matters that much more.
            </span>
            </div>
        </div>    
    )
}

export default About;