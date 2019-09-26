import Quiz from './quiz_show';
import { fetchQuiz, composeQuiz, fetchQuizzes} from '../../actions/quiz_actions';
import { connect } from 'react-redux';

const mapStatetoProps = (state, props) => {
    const userId = state.session.user.id;
    const userQuizzes = Object.values(state.quizzes.all).filter(quiz => quiz.user === userId);
    const userEmail = state.session.user.email;
    let quizzesWon = 0;
    let quizzesLost = 0;

    if (userQuizzes.length > 0) {
        quizzesWon = userQuizzes.filter(q => q.score === 1).length;
        quizzesLost = userQuizzes.filter(q => q.score === 0).length;
    }
    let quiz;
    let id = state.session.user.id || {};
    if (Object.keys(state.quizzes.data).length === 0 && state.quizzes.data.constructor === Object) {
        quiz = ""
        
    } else {
     quiz = state.quizzes.data;
    }
    
    return {
        quiz: quiz,
        id: id,
        quizzesWon: quizzesWon,
        quizzesLost: quizzesLost,
        userEmail: userEmail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuiz: (id) => dispatch(fetchQuiz(id)),
        composeQuiz: (data) => dispatch(composeQuiz(data)),
        fetchQuizzes: () => dispatch(fetchQuizzes())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Quiz);