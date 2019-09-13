import {RECEIVE_QUIZZES, RECEIVE_QUIZ, RECEIVE_USER_QUIZZES} from '../actions/quiz_actions';

const QuizzesReducer = (state = {all: {}, data: {}, user: {}, new: undefined}, action) => {
    
    Object.freeze(state);
    let oldState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_QUIZZES:
            oldState.all = action.quizzes.data
            // return oldState;
            return oldState;
        case RECEIVE_QUIZ:
            let quiz = action.quiz.data;
            if (action.quiz.data[0]){
                quiz = action.quiz.data[0]
            }
    
            return Object.assign({}, oldState, oldState.data = quiz)
        case RECEIVE_USER_QUIZZES:
            // there could be an issue here
            return oldState;
        default:
            return oldState;
    }
}

export default QuizzesReducer;