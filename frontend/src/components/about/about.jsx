import {Link} from 'react-router-dom';
import NavBar from '../nav/navbar';
import React from 'react';
const About = () => {
    return (
        <div className="homepage-container">
            <NavBar />
            <div className="about-body">
                <div className="about-title">
                    <p>About</p>
                </div>
            <div className="about">
                <p>
                  Every algorithm has a run time analysis where you can get the big picture and see how fast it will run.
                        When the input is 10 billion versus 10 thousand, it becomes much more important to look at the worst case scenario.
                        Big O notation is a mathematical notation that is used on this website to help train you to become better at
                  finding the Time Complexity of an algorithm. For example: If you are given a number equal to 10 and you have to print
                  out every number, this is referred to as Constant Time(O(1)), but if you do not know what that number is then the
                  notation would be referred to as Linear Time(O(n)). You can refer to the <a href="https://www.bigocheatsheet.com/" target="_blank">Big-O Cheat Sheet </a> 
                  for more details.
                </p>
            </div>
            </div>
        </div>    
    )
}

export default About;