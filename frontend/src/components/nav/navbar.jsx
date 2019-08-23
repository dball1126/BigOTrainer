import React from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e){
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="session-box">
                    <Link to={'/quizes'}>All Quizes</Link>
                    <div className="logout-box">
                        <button onClick={this.logoutUser}>Logout</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="session-box">
                    <div className="signup-box">
                        <Link to={'/signup'}>Signup</Link>
                    </div>
                    <div className="login-box">
                        <Link to={'/login'}>Login</Link>
                    </div>
                </div>
            );
        }
    }
    render(){
        return (
            <div className="session-container">
                {this.getLinks()}
            </div>
        )
    }
}

export default NavBar;