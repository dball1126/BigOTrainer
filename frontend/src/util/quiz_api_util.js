import axios from 'axios';

export const getQuizzes = () => {
    return axios.get('/api/quizzes')
};