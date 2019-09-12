import { connect } from 'react-redux';
import { fetchQuizzes, fetchUserQuizzes } from '../../actions/quiz_actions';
import Quizzes from './quizzes';

const mapStateToProps = (state, props) => {
   
    return {
        quizzes: Object.values(state.quizzes.all).filter(quiz => quiz.user === undefined),
        currentUser: state.session.user.id || ""
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchQuizzes: () => dispatch(fetchQuizzes()),
        fetchUserQuizzes: id => dispatch(fetchUserQuizzes(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);