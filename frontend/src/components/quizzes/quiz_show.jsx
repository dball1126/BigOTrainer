import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../nav/navbar_container';
import Problem from './problem';

 class QuizShow extends React.Component{
     constructor(props){
         super(props);
         this.displayData = [];
         this.questionData = [];

         this.state = {quiz: "",
                        name: "",
                        level: "",
                        questions: "",
                        counter: 0,
                        nextTurn: true,
                        problem: "",
                        questionId: 1,
                        answerOptions: [],
                        answer: '',
                        answersCount: {},
                        result: '',
                        showData: this.displayData,
                        showQuestionData: this.questionData,
                        selectedOption: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
     }
     
    
     componentDidMount(){
         if (this.state.quiz === ""){
            this.props.fetchQuiz(this.props.match.params.quizId).then(() => this.setState({
                name: this.props.quiz.name,
                quiz: this.props.quiz,
                level: this.props.quiz.level,
                explanation: this.props.quiz.explanation,
                questions: this.props.quiz.questions,
                answer: this.props.quiz.questions[0].answer}))
                
         } 
         
         if (this.state.quizzes === undefined){
             this.props.fetchQuizzes();
         }
        
     }

     handleSubmit() {
         let reducer = (acc, val) => acc + val;
         let quiz = {
             quiz: this.state.quiz,
             id: this.props.id,
             score: this.state.answerOptions.reduce(reducer) >= 3 ? 1 : 0
         }
         
         this.props.composeQuiz(quiz)
            
      

     }
     handleOptionChange = changeEvent => {
         this.setState({
             selectedOption: changeEvent.target.value
         });
     };
    

     renderQuestion(){
         let question = "";
        if (this.state.counter <= this.state.questions.length){
            question = this.state.questions[this.state.counter]
        } 
        
        let explanation = "", problem = "", options = [];
        let counter = this.state.counter;
        
        // If the question.problem is blank take it away
        if (this.state.questions.length){
            problem = question.problem;
        setTimeout(() => {
            if (problem === ""){
                this.questionData.push({display: "none"})

                } else {
                    this.questionData = [];
                }
                this.setState({showQuestionData: this.questionData})
            }, 100)
        }
        
        if (question !== "" && question !== undefined) {
            
            explanation = question.explanation;
            options = question.options;
            problem = question.problem;
        }
        
        return (
            <div className="question-box">
                <div className="explanation">
                    {explanation}
                </div>
                
                   
                <div className="problem" style={this.questionData[counter]}>
                    
                    <Problem  problem={problem}/>
                    
                </div>
                
                <div className="options-box">
                  
                {options.map((option, i) => (
                    <div className="options" key={i}>
                        <input type="radio"
                               className="option-radio"
                               value={option.letter}
                                checked={this.state.selectedOption === option.letter}
                                onClick={this.handleOptionChange}
                               onChange={this.update('result')}
                               id="option-radio-id"/>
                        <label htmlFor="option-radio-id">
                            &nbsp; &nbsp;
                                {option.letter} : {option.title.split(" ").map((ele, i) => (
                                       
                                        <span className={`letter-title${ele}`} key={i}> 
                                        &nbsp;{ele}
                            </span>
                                       
                                ))}
                        </label>
                        </div>
                ))}
                </div>
            </div>
        )                     
     }

     setNextQuestion(){
         const reducer = (acc, val) => acc + val;
         let counter = this.state.counter + 1;
         this.setState({ nextTurn: false });
         let questionId = this.state.questionId + 1;
         let lastQuestion = ""
         if (counter <= 4) lastQuestion = "last-question"
        
         if (this.state.answer !== ""){
            if(this.state.result === this.state.answer) {
                this.state.showData.push(<div key={Date.now()} className="modal-answer-good" id={lastQuestion}><span>Correct!</span></div>)
                this.state.answerOptions.push(1);  // You got the question right     
            }   else {
                this.state.answerOptions.push(0);   // You got the quesiton wrong
                this.state.showData.push(<div key={Date.now()} className="modal-answer-bad" id={lastQuestion}><span>Incorrect!</span></div>)
            }
            this.setState({showData: this.displayData})
        }
            
         if (counter < this.state.questions.length) { //render next question
            setTimeout( () => { 
                this.setState({
            counter: counter,
             nextTurn: true,
             questionId: questionId,
             question: this.state.questions[counter],
             selectedOption: "",
             answer: this.props.quiz.questions[counter].answer
         })
         
        }, 500)
        
        setTimeout(() => {
            this.displayData = [];
            this.setState({
                showData: this.displayData
            })

        }, 1000)
        } else {
             setTimeout(() => {
                 this.displayData = [];
                 this.setState({
                     showData: this.displayData
                 })

             }, 1000)
             setTimeout(() => { //Do you have more than 3 questions correct ? If so you pass.
                 if (this.state.answerOptions.reduce(reducer) >= 3) {
                     this.state.showData.push(<div key={Date.now()} className="modal-result-good"><span className="modal-result">You Passed!</span></div>)
                 } else {
                     this.state.showData.push(<div key={Date.now()} className="modal-result-bad"><span className="modal-result">You Failed!</span></div>)
                 }
                 this.setState({ showData: this.displayData })
             }, 1010)

             this.handleSubmit()
             this.nextTurn = true;
                 setTimeout(() => {
                     this.props.history.push('/');
                    }, 3000)
        }
     }
     
     update(field) {
         return (e) => {  
             this.setState({ [field]: e.target.value })
         }
     }

     render(){
         
         const {level, name} = this.state;
         const { quizzesLost, quizzesWon, userEmail} = this.props;
        
        return (
            <div className="quiz-show-container">
                <NavBar quizzesWon={quizzesWon} quizzesLost={quizzesLost} userEmail={userEmail}/>
                <div className = "quiz-title-show">
                    <h2>Time Complexity / Runtime Analysis</h2>
                </div>
                    <div id="result-modal">
                        {this.displayData}
                    </div>
                <div className="quiz-show-box">
                    <div className="quiz"  >
                        
                        <div className="quiz-show-name">
                            <div className="show-name-icon"><i className="devicon-javascript-plain colored" id="deviconz"></i></div>
                            <div className="show-name-level">{name}: Level {level}</div>
                        </div>
                        <div className="render-question">
                           
                            {this.renderQuestion()}
                         
                        </div>
                        <button  className="submit-quiz" onClick={() => this.setNextQuestion()}>Submit</button>
                    </div>
                </div>
            </div>
        )
     }
 }

 export default withRouter(QuizShow);