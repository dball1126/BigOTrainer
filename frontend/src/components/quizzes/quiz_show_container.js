import Quiz from './quiz_show';
import {fetchQuiz} from '../../actions/quiz_actions';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => {
    const quiz = ""
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