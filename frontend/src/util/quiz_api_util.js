import axios from 'axios';

export const getQuizzes = () => {
    return axios.get('/api/quizzes')
};

export const getQuiz = (id) => {
    return axios.get(`/api/quizzes/${id}`)
}