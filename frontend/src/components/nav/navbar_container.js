import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import NavBar from './navbar';
import React from 'react';
const mapStateToProps = (state, props) => {

    return {
    quizzesLost: props.quizzesLost || 0,
    quizzesWon: props.quizzesWon || 0,
    loggedIn: state.session.isAuthenticated,
    userEmail: props.userEmail
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 