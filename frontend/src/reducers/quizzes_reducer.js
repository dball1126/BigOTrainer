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
            

            return Object.assign({}, oldState, action.quiz.data[0])
        default:
            return oldState;
    }
}

export default QuizzesReducer;