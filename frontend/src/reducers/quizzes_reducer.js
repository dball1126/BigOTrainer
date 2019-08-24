import {RECEIVE_QUIZZES} from '../../src/actions/quiz_actions';

const QuizzesReducer = (oldState, action) => {
    Object.freeze(oldState);
    switch (action) {
        case RECEIVE_QUIZZES:
            return Object.assign({}, oldState, action.quizzes);
        default:
            return oldState;
    }
}

export default QuizzesReducer;