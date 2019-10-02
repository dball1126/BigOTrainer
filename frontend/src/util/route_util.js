import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {

return (

    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
            ) : (
                <Redirect to="/quizzes" />
                )
                )
            }
            />
            )
    };

const Protected = (state, ownProps) => {
    // errors on 
    const Component = state.component;
    const loggedIn = state.loggedIn;
    const path = state.path
   
    return (
        
    <Route
        // {...rest}
        path={path}
        render={(props) => 
            loggedIn ? (
            <Component {...props} />
            ) : (
                //Redirect to Homepage on Logout
                <Redirect to="/" />
            )
        } 
    />
    )
    };

const mapStateToProps = state => (
    {loggedIn: state.session.isAuthenticated}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));