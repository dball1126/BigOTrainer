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
                    {/* <Link to={'/quizzes'}>All Quizzes</Link> */}
                    
                        <div className="quiz-stats-box">
                            <span className="winners">Quizzes Won: {this.props.quizzesWon}</span>
                            <span className="losers">Quizzes Lost: {this.props.quizzesLost}</span>
                        </div>
                        <div className="box-credentials">

                        <div className="nav-email-box">
                            <span className="nav-email">{this.props.userEmail}</span>
                        </div>
                    
                    <div className="logout-box">
                        <button onClick={this.logoutUser} className="logout-button">Logout</button>
                    </div>
                        </div>
                </div>
            );
        } else {
            return (
                <div className="session-box">
                    <div className="demo-button">
                        <button className="demo-button" onClick={() => this.props.login({email: `demo@demo.com`, password: 'password'})}>Demo Login</button>
                    </div>
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