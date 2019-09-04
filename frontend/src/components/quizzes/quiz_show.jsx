import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../nav/navbar_container';
 class QuizShow extends React.Component{
     constructor(props){
         super(props);
         
         this.state = {quiz: "",
                        name: "",
                        level: "",
                        questions: "",
                        counter: 0,
                        questionId: 1,
                        answerOptions: [],
                        answer: '',
                        answersCount: {},
                        result: ''}
         //title, problem, explanation, answer
     }
     componentDidMount(){
         
         if (this.state.quiz === ""){
            this.props.fetchQuiz(this.props.match.params.quizId).then(() => this.setState({
                name: this.props.quiz.name,
                quiz: this.props.quiz,
                level: this.props.quiz.level,
                explanation: this.props.quiz.explanation,
                questions: this.props.quiz.questions,}))
         }

         
         
     }

     handleSubmit(e) {
         e.preventDefault();
         let quiz = {
             quiz: this.state.quiz
         }

     }

     renderQuestion(){
         let question = "";
        if (this.state.counter <= this.state.questions.length){
            question = this.state.questions[this.state.counter]
            this.state.counter++;
        } 
        
        let explanation = ""
        let title = ""
        let options = [];
        let problem = "";
        if (question !== "" && question !== undefined) {
            
            explanation = question.explanation;
            title = question.title;
            options = question.options;
            problem = question.problem;
        }
        debugger
        return (
            <div className="question-box">
                <div className="explanation">
                {explanation}
                </div>
                <div className="problem">
                {problem.split(",").map(line => (
                    <div>
                        {line}
                    </div>
                ))}
                </div>
                {options.map(option => (
                    <div>
                        {option.letter} : {option.title}
                        </div>
                    
                ))}
            </div>
         )
     }


     update() {
         return e => this.setState({
             text: e.currentTarget.value
         });
     }

     render(){
        const level = this.state.level;
        const name = this.state.name;
        // const explanation = this.state.explanation;
        
        return (
            <div className="quiz-show-container">
                <NavBar />
                <div className="quiz-show-box">
                    <form className="quiz">
                        <div className="quiz-show-name">{name}: Level {level}</div>
                        <div className="explanation">
                            {/* {explanation} */}
                            {this.renderQuestion()}
                        </div>
                        <input type="submit" value="Submit" className="submit-quiz"/>
                    </form>
                </div>
            </div>
        )
     }
 }

 export default withRouter(QuizShow);