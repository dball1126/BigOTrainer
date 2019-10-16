import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import QuizzesContainer from './quizzes/quiz_container';
import QuizShowContainer from './quizzes/quiz_show_container';
import MainPageContainer from './main/main_page_container'
import About from './about/about';
const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={MainPageContainer} />
            <AuthRoute exact path="/about" component={About} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/quizzes/:quizId" component={QuizShowContainer} />
            <ProtectedRoute exact path="/quizzes" component={QuizzesContainer} />
        </Switch>
    </div>
);


export default App;