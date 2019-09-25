import { connect } from 'react-redux';
import { fetchQuizzes, fetchUserQuizzes } from '../../actions/quiz_actions';
import Quizzes from './quizzes';

const mapStateToProps = (state, props) => {
    const userId = state.session.user.id;
    const userQuizzes = Object.values(state.quizzes.all).filter(quiz => quiz.user === userId) || 0;
    debugger
    return {
        quizzes: Object.values(state.quizzes.all).filter(quiz => quiz.master === true),
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