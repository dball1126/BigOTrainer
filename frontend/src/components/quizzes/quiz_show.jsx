import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../nav/navbar_container';
 class QuizShow extends React.Component{
     constructor(props){
         super(props);
         this.state = {quiz: this.props.quiz}
         //title, problem, explanation, answer
     }
     componentDidMount(){
         
         if (this.state.quiz === ""){
            this.props.fetchQuiz(this.props.match.params.quizId).then(() => this.setState({quiz: this.props.quiz}))
         }
     }

     handleSubmit(e) {
         e.preventDefault();
         let quiz = {
             quiz: this.state.quiz
         }

     }

     update() {
         return e => this.setState({
             text: e.currentTarget.value
         });
     }

     render(){
        const quiz = this.state.quiz;
        return (
            <div className="quiz-show-container">
                <NavBar />
                <div className="quiz-show-box">
                    <form className="quiz">
                        <div className="quiz-show-name">{quiz.name}: Level {quiz.level}</div>
                        <div className="explanation">
                            {quiz.explanation}
                        </div>
                        <input type="submit" value="Submit" className="submit-quiz"/>
                    </form>
                </div>
            </div>
        )
     }
 }

 export default withRouter(QuizShow);