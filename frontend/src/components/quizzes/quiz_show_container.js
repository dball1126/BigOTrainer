import Quiz from './quiz_show';
import {fetchQuiz, composeQuiz} from '../../actions/quiz_actions';
import { connect } from 'react-redux';

const mapStatetoProps = (state, props) => {
    
    let quiz;
    let id = state.session.user.id || {};
    if (Object.keys(state.quizzes.data).length === 0 && state.quizzes.data.constructor === Object) {
        quiz = ""
        
    } else {
     quiz = state.quizzes.data;
    }
    
    return {
        quiz: quiz,
        id: id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuiz: (id) => dispatch(fetchQuiz(id)),
        composeQuiz: (data) => dispatch(composeQuiz(data))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Quiz);