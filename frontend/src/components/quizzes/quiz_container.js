import { connect } from 'react-redux';
import { fetchQuizzes, fetchUserQuizzes } from '../../actions/quiz_actions';
import Quizzes from './quizzes';

const mapStateToProps = (state, props) => {
    const userId = state.session.user.id;
    const userQuizzes = Object.values(state.quizzes.all).filter(quiz => quiz.user === userId);
    const userEmail = state.session.user.email;
    let quizzesWon = 0;
    let quizzesLost = 0;
    
    if (userQuizzes.length > 0) {
        quizzesWon = userQuizzes.filter(q => q.score === 1).length;
        quizzesLost = userQuizzes.filter(q => q.score === 0).length;
    }
    debugger
    return {
        quizzes: Object.values(state.quizzes.all).filter(quiz => quiz.master === true),
        currentUser: state.session.user.id || "",
        quizzesWon: quizzesWon,
        quizzesLost: quizzesLost,
        userEmail: userEmail,
        allQuizzes: state.quizzes.all
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchQuizzes: () => dispatch(fetchQuizzes()),
        fetchUserQuizzes: id => dispatch(fetchUserQuizzes(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);