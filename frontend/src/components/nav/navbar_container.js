import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = (state, props) => {

    return {
    quizzesLost: props.quizzesLost || 0,
    quizzesWon: props.quizzesWon || 0,
    loggedIn: state.session.isAuthenticated,
    userEmail: props.userEmail
    }
};

export default connect(mapStateToProps, { logout })(NavBar); 