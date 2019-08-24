import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarOther from '../nav/navbar_other';
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }
        this.setState({errors: nextProps.errors})
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors(){
        return(
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-S{i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }
    render(){
        return (
            <div >
                <NavBarOther />
                <div className="signup-form-container">
                <div className="signup-form-box">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <br />
                        <input type="text"
                               class="credentials"
                               value={this.state.email}
                               onChange={this.update('email')}
                               placeholder="Email"/>
                        <br />
                        <input type="text"
                               className="credentials"
                               value={this.state.username}
                               onChange={this.update('username')}
                               placeholder="Username" />
                        <br />
                        <input type="password"
                               className="credentials"
                               value={this.state.password}
                               onChange={this.update('password')}
                               placeholder="Password" />
                        <br />
                        <input type="submit" value="Submit" className="session-submit"/>
                        {this.renderErrors()}
                    </div>
                </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignupForm);