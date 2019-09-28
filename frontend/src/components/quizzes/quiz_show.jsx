import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../nav/navbar_container';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        
        let explanation = "";
        
        let options = [];
        let problem = "";
        setTimeout(() => {
            if (problem === ""){
                this.questionData.push({display: "none"})

                } else {
                    this.questionData = [];
                }
                this.setState({showQuestionData: this.questionData})
            }, 100)

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
                
                   
                <div className="problem" style={this.questionData[0]}>
                
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
     }

     setNextQuestion(){
            
         let counter = this.state.counter + 1;
         let questionId = this.state.questionId + 1;
        
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
                this.props.history.push('/quizzes');
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
         let quizzesLost = this.props.quizzesLost;
         let quizzesWon = this.props.quizzesWon;
         let userEmail = this.props.userEmail
        
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