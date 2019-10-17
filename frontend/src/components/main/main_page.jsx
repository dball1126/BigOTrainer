import React from 'react';
import NavBar from '../nav/navbar_container';
import Spinner from 'react-spinkit';
import Wave from 'react-wavify'
import {Link} from 'react-router-dom';
class MainPage extends React.Component {
    constructor(props){
        super(props);
         props = {
            startStyle: { opacity: 0 },
            endStyle: { opacity: 1 }
        };
    }
    render(){
        
        return (
            <div className="homepage-container">
                <NavBar />
               
            <div className="homepage-banner">
                     
                <div className="homepage-title">
                
                        <div className="main-title">
                            Big<b className="big-o">O</b>Trainer</div>
                    <Spinner id="spin-doctor" name="ball-scale-multiple" color="black" />
                </div>       
                       <div className="description">This is a website where you can train your skills on the runtime of an algorithm, method or function.
                                                  <Link to={'/signup'} className="main-page-links"> Signup</Link> or try the <span className="main-page-links" onClick={() => this.props.login({ email: `demo@demo.com`, password: 'password' })}>Demo Login</span> and take some Time Complexity Quizzes.</div>
               
            </div>
                <div className="homepage-body">
                    <Wave fill='#F2F2F2'
                        paused={false}
                        options={{
                            height: 20,
                            amplitude: 30,
                            speed: 0.15,
                            points: 3
                        }}/>
                        <div className="lower-body">

                        </div>
                </div>
                <footer className="homepage-footer">
                    
                        <div className="main-page-logo-box">
                        <div className="logo-box">
                            <Link to={'/about'} className="logo-link">About</Link>
                        </div>
                            <div className="main-page-img-box">
                                <a href="https://www.linkedin.com/in/daniel-ball-1502b062/"><img src="https://yap-dev.s3.amazonaws.com/Linkedin-logo.png" /></a>
                            </div>
                            <div className="main-page-img-box">
                                <a href="https://github.com/dball1126"><img src="https://yap-dev.s3.amazonaws.com/GitHub-logo-32px.png" /></a>
                            </div>
                            <div className="main-page-img-box">
                                <a href="https://angel.co/daniel-ball-6"><img src="https://yap-dev.s3.amazonaws.com/AngelList_Black_Victory_Hand.png" /></a>
                            </div>
                        </div>
                        
                   
                </footer>
            </div>
                       
        )
    }
}

export default MainPage;