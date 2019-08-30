import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../nav/navbar_container';
 class QuizShow extends React.Component{
     constructor(props){
         super(props);
         this.state = {quiz: props.quiz}
     }
     componentWillMount(){
         debugger
         this.props.fetchQuiz(this.state.quiz._id);
     }

     render(){
        
        return (
            <div className="quiz-show-container">
                <NavBar />
                <h1>Quiz Show Component</h1>
            </div>
        )
     }
 }

 export default withRouter(QuizShow);