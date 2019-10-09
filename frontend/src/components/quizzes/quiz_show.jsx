import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../nav/navbar_container';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import QuestionContainer from './question_container';
 class QuizShow extends React.Component{
     constructor(props){
         super(props);
         this.displayData = [];
         this.questionData = [];
         this.submitter = false;
         
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
        // this.setNextQuestion = this.setNextQuestion.bind(this);
     }
     
    
     componentDidMount(){
         console.log("componenet did mount");
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
        if(this.submitter === false && this.state.nextTurn ){ 
             // Specifically makes sure this is not called when calling handleSubmit
         let question = "";
        //  console.log("renderQuestion")
        if (this.state.counter <= this.state.questions.length){
            question = this.state.questions[this.state.counter]
        } 
        
        let explanation = "";
        
        let options = [];
        let problem = "";
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
                
                {problem.split(",").map((line, i) => (
                    <div className={`pre${i}`} id={"pre-problem"} key={i}>
                        
                        <SyntaxHighlighter language="javascript" style={darcula}  id={`star${line}`} >
                                    {line}
                        </SyntaxHighlighter>
                                    
                    </div>
                ))}
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
                                } else {
                                    return (
                                        <div></div>
                                    )
                                }
                                
     }

     setNextQuestion(){
         console.log("setNextQuestion")
         const reducer = (acc, val) => acc + val;
        //  this.nextTurn = false;
         let counter = this.state.counter + 1;
         this.setState({ nextTurn: false });
         let questionId = this.state.questionId + 1;
         let lastQuestion = ""
         if (counter <= 4) lastQuestion = "last-question"
        // debugger
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
            //render next question
            
         if (counter < this.state.questions.length) {
            setTimeout( () => { 
                this.setState({
            counter: counter,
             nextTurn: true,
             questionId: questionId,
             question: this.state.questions[counter],
             selectedOption: "",
             answer: this.props.quiz.questions[counter].answer
         })
         
        }, 900)
        
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
             this.submitter = true;
             this.nextTurn = true;
                 setTimeout(() => {
                     this.props.history.push('/');
                    }, 3000)
                
        }
        
     }
     
     handleAnswer(event){
        this.setState({answer: event.currentTarget.value})
        this.setNextQuestion();

     }


     update(field) {
         return (e) => {
            // debugger
             this.setState({ [field]: e.target.value })
         }
     }

     render(){
         
        const level = this.state.level;
        const name = this.state.name;
         let quizzesLost = this.props.quizzesLost;
         let quizzesWon = this.props.quizzesWon;
         let userEmail = this.props.userEmail
        
        let problem = "";
         let question = "";
         let explanation = "";
         let options = [];
         let counter = this.state.counter;
         let questions = this.state.questions || [];
         if (this.state.counter <= this.state.questions.length) {
             question = this.state.questions[this.state.counter]
         } 
         if (this.state.questions.length) {
             problem = question.problem;
         }
             if (question !== "" && question !== undefined) {

                 explanation = question.explanation;

                 options = question.options;
                 problem = question.problem;
             }
        
        return (
            <div className="quiz-show-container">
                <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
                <script src="algebra-0.2.5.min.js"></script>
                <NavBar quizzesWon={quizzesWon} quizzesLost={quizzesLost} userEmail={userEmail}/>
                <div className = "quiz-title-show">
                    <h2>Time Complexity / Runtime Analysis</h2>
                </div>
                    <div id="result-modal">
                        {this.displayData}
                    </div>
                <div className="quiz-show-box">
                    <form className="quiz" type="post"  >
                        <div className="quiz-show-name">{name}: Level {level}</div>
                        <div className="render-question">
                            {/* {explanation} */}
                           
                            {this.renderQuestion()}
                            <QuestionContainer questions={questions} 
                                                counter={counter} 
                                                question={question} 
                                                options={options}
                                                explanation={explanation}
                                                problem={problem}/>
                        </div>
                        <button  className="submit-quiz" onClick={() => this.setNextQuestion()}>button</button>
                    </form>
                </div>
            </div>
        )
     }
 }

 export default withRouter(QuizShow);