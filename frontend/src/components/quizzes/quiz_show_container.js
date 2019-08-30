import Quiz from './quiz_show';
import {fetchQuiz} from '../../actions/quiz_actions';
import { connect } from 'react-redux';

const mapStatetoProps = (state, props) => {
    
    let quiz;
    if (Object.keys(state.quizzes.data).length === 0 && state.quizzes.data.constructor === Object) {
        quiz = ""
        
    } else {
     quiz = state.quizzes.data;
    }
    debugger
    return {
        quiz: quiz
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuiz: (id) => dispatch(fetchQuiz(id))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Quiz);