import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarOther from '.././nav/navbar_other';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    }

    // componentWillMount(){
    // let newClass = document.getElementsByClassName('session-container1');
    // setTimeout(() => {
    //     newClass[0].style.backgroundColor = "rgb(239, 136, 105)";
        
    // }, 1)

    // }
                
    sessionClickClose() {
        const ele = document.getElementById("session-errors");
        ele.style.display = "none";
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/quizzes');
        }
        this.setState({errors: nextProps.errors})
    }
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let user = { email: this.state.email,
                     password: this.state.password};
        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} id="session-errors">
                        {this.state.errors[error]}
                        <div onClick={() => this.sessionClickClose()} className="close-x">X</div>
                    </li>
                ))}
            </ul>
        );
    }
    
    render() {
        return (
            <div >
                <NavBarOther />
                <div className="session-form-container">
                    {this.renderErrors()}
                    <div className="session-form-box">
                        
                <form onSubmit={this.handleSubmit}>
                    <div className="session-form">
                        <div className="credentials-header">
                            <h1>Log in to BigOTrainer</h1>
                        </div>
                        <br />
                        <input type="text"
                               className="credentials"
                               value={this.state.email}
                               onChange={this.update('email')}
                               placeholder="Email" />
                        <br/>
                        <input type="password"
                               className="credentials"
                               value={this.state.password}
                               onChange={this.update('password')}
                               placeholder="Password" />
                        <br/>
                        <input type="submit"
                               value="Submit"
                               className="session-submit"
                               />
                               
                    </div>
                </form>
            </div>
        </div>
    </div>
        );
    }
}

export default withRouter(LoginForm);