import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../nav/navbar_container';
 class QuizShow extends React.Component{
     constructor(props){
         super(props);
         this.state = {quiz: this.props.quiz}
     }
     componentWillMount(){
         
         if (this.state.quiz === ""){
            this.props.fetchQuiz(this.props.match.params.quizId).then(() => this.setState({quiz: this.props.quiz}))
         }
     }

     render(){
        debugger
        return (
            <div className="quiz-show-container">
                <NavBar />
                <div className="quiz-show-box">
                    <h1>{this.state.quiz.name}</h1>
                </div>
            </div>
        )
     }
 }

 export default withRouter(QuizShow);