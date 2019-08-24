import {RECEIVE_QUIZZES} from '../actions/quiz_actions';

const QuizzesReducer = (state = {all: {}, data: {}, user: {}, new: undefined}, action) => {
    
    Object.freeze(state);
    let oldState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_QUIZZES:
            oldState.all = action.quizzes.data
            // return oldState;
            return oldState;
        default:
            return oldState;
    }
}

export default QuizzesReducer;