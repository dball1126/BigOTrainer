import React from 'react';
import NavBar from '../nav/navbar_container';
// import { Spring } from 'react-spring/renderprops'
// import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';
// import Spinner from 'react-spinner-material';
var Spinner = require('react-spinkit');
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
                {/* <div className="spinner">
                </div> */}
                        <h1>Big<b className="big-o">O</b>Trainer</h1>
                    <Spinner id="spin-doctor" name="ball-scale-multiple" color="black" />

                       
                </div>       
               
            </div>
                <div className="homepage-body">

                </div>
                <footer className="homepage-footer">
                    
                </footer>
            </div>
                       
        )
    }
}

export default MainPage;