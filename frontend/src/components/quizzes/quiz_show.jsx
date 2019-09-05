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
                <div className="options-box">
                {options.map(option => (
                    <div className="options">
                        <label>
                        <input type="radio"
                               className="option-radio"
                               value={option.letter}
                               onChange={this.update(this.state.answer)}/>
                            &nbsp; &nbsp;
                            <span className="letter-title"> 
                                {option.letter} : {option.title}
                            </span>
                        </label>
                        </div>
                    
                ))}
                </div>
            </div>
         )
     }

     setNextQuestion(){

         const counter = this.state.counter + 1;
         const questionId = this.state.questionId + 1;

         this.setState({
             counter: counter,
             questionId: questionId,
             question: this.state.questions[counter]
         })

     }
     
     handleAnswer(event){
        this.setState({answer: event.currentTarget.value})
        this.setNextQuestion();

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
        console.log(this.state.counter)
        return (
            <div className="quiz-show-container">
                <NavBar />
                <div className = "quiz-title-show">
                    <h2>Time Complexity / Runtime Analysis</h2>
                </div>
                <div className="quiz-show-box">
                    <form className="quiz" onSubmit={() => this.setNextQuestion()}>
                        <div className="quiz-show-name">{name}: Level {level}</div>
                        <div className="render-question">
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