import {RECEIVE_QUIZZES} from '../actions/quiz_actions';

const QuizzesReducer = (oldState = {all: {}, user: {}, new: undefined}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_QUIZZES:
            debugger
            return oldState;
            // return Object.assign({}, oldState, action.quizzes);
        default:
            return oldState;
    }
}

export default QuizzesReducer;