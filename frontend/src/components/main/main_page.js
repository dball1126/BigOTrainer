import React from 'react';
import NavBar from '../nav/navbar_container';
class MainPage extends React.Component {
    render(){
        return (
            <div className="homepage-container">
                <NavBar />
            <div className="homepage-banner">
                <div className="homepage-title">
                    <h1>BigOTrainer</h1>
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