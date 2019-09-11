import axios from 'axios';

export const getQuizzes = () => {
    return axios.get('/api/quizzes')
};

export const getQuiz = (id) => {
    
    return axios.get(`/api/quizzes/${id}`)
}

//get user quizzes

export const getUserQuizzes = id => {
    return axios.get(`/api/quizzes/user/${id}`);
};

// post quiz

export const postQuiz = data => {
    debugger
    
    return axios.post(`/api/quizzes/${data.quiz._id}`, data)
        
        
    }
    