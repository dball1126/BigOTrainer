import { getQuizzes, getQuiz } from '../util/quiz_api_util';

export const RECEIVE_QUIZZES = "RECEIVE_QUIZZES";
export const RECEIVE_QUIZ = "RECEIVE_QUIZ";

export const receiveQuizzes = quizzes => ({
    
    type: RECEIVE_QUIZZES,
    quizzes
   
});

export const receiveQuiz = id => ({
    type: RECEIVE_QUIZ,
    id
})

export const fetchQuiz = (id) => dispatch => {
    debugger
    return (
        getQuiz(id).then(id => dispatch(receiveQuiz(id))).catch(err => console.log(err))
    )
}

export const fetchQuizzes = () => dispatch => {
    
    return (
    getQuizzes().then(quizzes => dispatch(receiveQuizzes(quizzes))).catch(err => console.log(err))
    )
}