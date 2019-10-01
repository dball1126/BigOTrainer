import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import mainPage from './main_page';

const mapDispatchToProps = (dispatch) => {
    
    return {
        login: (data) => (dispatch(login(data)))
    }
}

export default connect(null, mapDispatchToProps)(mainPage);