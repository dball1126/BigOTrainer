import { getQuizzes, getQuiz, getUserQuizzes, postQuiz } from '../util/quiz_api_util';

export const RECEIVE_QUIZZES = "RECEIVE_QUIZZES";
export const RECEIVE_QUIZ = "RECEIVE_QUIZ";
export const RECEIVE_USER_QUIZZES = 'RECEIVE_USER_QUIZZES';

export const receiveQuizzes = quizzes => ({
    
    type: RECEIVE_QUIZZES,
    quizzes
   
});

export const receiveQuiz = quiz => ({
    type: RECEIVE_QUIZ,
    quiz
});

export const receiveUserQuizzes = quizzes => ({
    type: RECEIVE_USER_QUIZZES,
    quizzes
});

export const fetchUserQuizzes = (id) => dispatch => {
    
    return (
    getUserQuizzes(id).then(quiz => dispatch(receiveUserQuizzes(quiz))).catch(err => console.log(err))
    )
};

export const fetchQuiz = (id) => dispatch => {
    
    return (
        getQuiz(id).then(quiz => dispatch(receiveQuiz(quiz))).catch(err => console.log(err))
    )
}

export const fetchQuizzes = () => dispatch => {
    
    return (
    getQuizzes().then(quizzes => dispatch(receiveQuizzes(quizzes))).catch(err => console.log(err))
    )
}

export const composeQuiz = data => dispatch => (
    
    postQuiz(data)
        .then(quiz => dispatch(receiveQuiz(quiz)))
        .catch(err => console.log(err))
)