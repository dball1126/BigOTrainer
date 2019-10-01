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
        debugger
        return (
            <div className="homepage-container">
                <NavBar />
               
            <div className="homepage-banner">
                     
                <div className="homepage-title">
                
                        <h1>Big<b className="big-o">O</b>Trainer</h1>
                    <Spinner id="spin-doctor" name="ball-scale-multiple" color="black" />

                       <p className="description">This is a website where you can train your skills on the runtime of an algorithm, method, or function.
                                                  So <Link to={'/signup'} className="main-page-links">Signup</Link>, or try the <span className="main-page-links" onClick={() => this.props.login({ email: `demo@demo.com`, password: 'password' })}>Demo Login</span> and take some Time Complexity Quizzes.</p>
                </div>       
               
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
                    
                </footer>
            </div>
                       
        )
    }
}

export default MainPage;