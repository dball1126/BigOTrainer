import { connect } from 'react-redux';
import { fetchQuizzes } from '../../actions/quiz_actions';
import Quizzes from './quizzes';

const mapStateToProps = (state) => {
    
    return {
        quizzes: Object.values(state.quizzes.all)
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchQuizzes: () => dispatch(fetchQuizzes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);