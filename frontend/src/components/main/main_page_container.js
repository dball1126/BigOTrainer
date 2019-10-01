import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';


const mapDispatchToProps = (dispatch) => {
    
    return {
        login: (data) => (dispatch(login(data)))
    }
}

export default connect(null, mapDispatchToProps)(mainPageContainer);