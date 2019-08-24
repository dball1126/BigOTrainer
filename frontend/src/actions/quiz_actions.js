import { getQuizzes } from '../util/quiz_api_util';

export const RECEIVE_QUIZZES = "RECEIVE_QUIZZES";

export const receiveQuizzes = quizzes => {
    debugger
    return {
    type: RECEIVE_QUIZZES,
    quizzes
    }
};

export const fetchQuizzes = (dispatch) =>  (
    getQuizzes()
    .then(quizzes => dispatch(receiveQuizzes(quizzes)))
    .catch(err => console.log(err))
)