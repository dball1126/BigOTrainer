import Quiz from './quiz_show';
import {fetchQuiz} from '../../actions/quiz_actions';
import { connect } from 'react-redux';

const mapStatetoProps = (state, props) => {
    debugger
    let quiz;
    if (Object.keys(state.quizzes.all).length === 0 && state.quizzes.all.constructor === Object) {
        quiz = ""
    } else {
     quiz = state.quizzes.all.filter(ele => ele._id === props.match.params.quizId)[0] || "";
    }
    
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