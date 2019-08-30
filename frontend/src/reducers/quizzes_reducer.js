import {RECEIVE_QUIZZES, RECEIVE_QUIZ} from '../actions/quiz_actions';

const QuizzesReducer = (state = {all: {}, data: {}, user: {}, new: undefined}, action) => {
    
    Object.freeze(state);
    let oldState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_QUIZZES:
            oldState.all = action.quizzes.data
            // return oldState;
            return oldState;
        case RECEIVE_QUIZ:
            debugger
            return oldState;
        default:
            return oldState;
    }
}

export default QuizzesReducer;