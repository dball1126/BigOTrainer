import React from 'react';
import NavBar from '../nav/navbar_container';
class MainPage extends React.Component {
    render(){
        return (
            <div className="homepage-container">
                <NavBar />
                <h1>BigOTrainer</h1>
                <footer>
                    Footer
                </footer>
            </div>
        )
    }
}

export default MainPage;