import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../nav/navbar_container';
import { set } from 'mongoose';
// import { Component2   } from './highlighter';
// import Prism from "prismjs";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import React from 'react';
// import hljs from 'highlight.js';
 class QuizShow extends React.Component{
     constructor(props){
         super(props);
         this.displayData = [];
         this.state = {quiz: "",
                        name: "",
                        level: "",
                        questions: "",
                        counter: 0,
                        questionId: 1,
                        answerOptions: [],
                        answer: '',
                        answersCount: {},
                        result: '',
                        showData: this.displayData,
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
        //  Prism.highlightAll();
     }

     handleSubmit() {
         
         
        
         let quiz = {
             quiz: this.state.quiz,
             id: this.props.id,
             answerOptions: this.state.answerOptions
         }
         
         this.props.composeQuiz(quiz).then(this.props.history.push(`/quizzes`))
         
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
                
                {problem.split(",").map((line, i) => (
                    // <pre className={`pre${i}`} >
                    //     <code className="language-javascript" >
                    
                        
                   
                    <div className={"pre-div"}>
                        {/* <div className="problem-start">{(i === 0 ? line : "")}</div> */}
                        
                        {/* {(i !== 0 && i !== problem.split(",").length - 1) ? line : ""} */}
                                    {/* {line.split(" ").map((li, j) =>   */}
                                    
                        <SyntaxHighlighter language="javascript" style={darcula} id={`star${line}`} >
                            
                                    
                                    {line}

                        </SyntaxHighlighter>
                                    
                                  
                        {/* {line} */}
                        {/* <div className="problem-end">{(i === problem.split(",").length - 1) ? line : ""}</div> */}
            </div>
                   
            //     </code>
            // </pre>
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
        
         if (this.state.answer !== ""){
            if(this.state.result === this.state.answer) {
                this.state.showData.push(<div key={Date.now()} className="modal-answer-good"><span>Correct!</span></div>)
                this.state.answerOptions.push(1)
            }   else {
                this.state.showData.push(<div key={Date.now()} className="modal-answer-bad"><span>Incorrect!</span></div>)
            }
            this.setState({showData: this.displayData})
        }
        
         if (counter < this.state.questions.length) {
            setTimeout( () => { 
                
         this.setState({
             counter: counter,
             questionId: questionId,
             question: this.state.questions[counter],
             selectedOption: "",
             answer: this.props.quiz.questions[counter].answer
         })
         
        }, 300)
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
             setTimeout(() => {
                 if (this.state.answerOptions.length >= 3) {
                     this.state.showData.push(<div key={Date.now()} className="modal-result-good"><span className="modal-result">You Passed!</span></div>)
                 } else {
                     this.state.showData.push(<div key={Date.now()} className="modal-result-bad"><span className="modal-result">You Failed!</span></div>)
                 }
                 this.setState({ showData: this.displayData })
             }, 1100)

            
            setTimeout(() => {
                this.handleSubmit()
                // this.props.history.push('/quizzes');
            }, 3000)
        }
        
     }
     
     handleAnswer(event){
        this.setState({answer: event.currentTarget.value})
        this.setNextQuestion();

     }


     update(field) {
         return (e) => {
             this.setState({ [field]: e.target.value })
         }
     }

     render(){
         
        const level = this.state.level;
        const name = this.state.name;
        
        
        return (
            <div className="quiz-show-container">
                <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
                
                <NavBar />
                <div className = "quiz-title-show">
                    <h2>Time Complexity / Runtime Analysis</h2>
                </div>
                    <div id="result-modal">
                        {this.displayData}
                    </div>
                <div className="quiz-show-box">
                    <form className="quiz" type="post"  onSubmit={() => this.setNextQuestion()} >
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