import React from 'react';
import { withRouter } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
class Question extends React.Component {
    constructor(props){
        super(props);
        this.questionData = [];
        this.state = {selectedOption: this.props.selectedOption}

    }
    handleOptionChange = changeEvent => {
        
        this.setState({
            selectedOption: changeEvent.target.value
        });
        setTimeout(() => {
            this.setState({
                selectedOption: ""
            })
        }, 1000)
    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderQuestion() {
            // Specifically makes sure this is not called when calling handleSubmit
            let question = "";
            if (this.props.counter <= this.props.questions.length) {
                question = this.props.questions[this.props.counter]
            }

            let explanation = "";

            let options = [];
            let problem = "";
            let counter = this.props.counter;

            // If the question.problem is blank take it away
            if (this.props.questions.length) {
                problem = question.problem;
                setTimeout(() => {
                    if (problem === "") {
                        this.questionData.push({ display: "none" })

                    } else {
                        this.questionData = [];
                    }
                    this.setState({ showQuestionData: this.questionData })
                }, 100)
            }

            if (question !== "" && question !== undefined) {

                explanation = question.explanation;

                options = question.options;
                problem = question.problem;
            

            return (
                <div className="question-box">
                    <div className="explanation">
                        {explanation}
                    </div>


                    <div className="problem" style={this.questionData[this.props.counter]}>

                        {this.props.problem.split(",").map((line, i) => (
                            <div className={`pre${i}`} id={"pre-problem"} key={i}>

                                <SyntaxHighlighter language="javascript" style={darcula} id={`star${line}`} >
                                    {line}
                                </SyntaxHighlighter>

                            </div>
                        ))}
                    </div>

                    <div className="options-box">

                        {this.props.options.map((option, i) => (
                            <div className="options" key={i}>
                                <input type="radio"
                                    className="option-radio"
                                    value={option.letter}
                                    checked={this.state.selectedOption === option.letter}
                                    onClick={this.handleOptionChange}
                                    onChange={this.update('result')}
                                    id="option-radio-id" />
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
                                        <div>
                                        
                                        </div>
                                    )
                                }
        } 
        

    

    render(){
        const renderQuestion = () => {
        
            // Specifically makes sure this is not called when calling handleSubmit
            let question = "";
            if (this.props.counter <= this.props.questions.length) {
                question = this.props.questions[this.props.counter]
            }

            let explanation = "";

            let options = [];
            let problem = "";
            let counter = this.props.counter;

            // If the question.problem is blank take it away
            if (this.props.questions.length) {
                problem = question.problem;
                setTimeout(() => {
                    if (problem === "") {
                        this.questionData.push({ display: "none" })

                    } else {
                        this.questionData = [];
                    }
                    this.setState({ showQuestionData: this.questionData })
                }, 100)
            }

            if (question !== "" && question !== undefined) {

                explanation = question.explanation;

                options = question.options;
                problem = question.problem;


                return (
                    <div className="question-box">
                        <div className="explanation">
                            {explanation}
                        </div>


                        <div className="problem" style={this.questionData[this.props.counter]}>

                            {this.props.problem.split(",").map((line, i) => (
                                <div className={`pre${i}`} id={"pre-problem"} key={i}>

                                    <SyntaxHighlighter language="javascript" style={darcula} id={`star${line}`} >
                                        {line}
                                    </SyntaxHighlighter>

                                </div>
                            ))}
                        </div>

                        <div className="options-box">

                            {this.props.options.map((option, i) => (
                                <div className="options" key={i}>
                                    <input type="radio"
                                        className="option-radio"
                                        value={option.letter}
                                        checked={this.state.selectedOption === option.letter}
                                        onClick={this.handleOptionChange}
                                        onChange={this.update('result')}
                                        id="option-radio-id" />
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
                    <div>

                    </div>
                )
            }
        } 
        
        return (
            <div>
                {renderQuestion()}
            </div>
        )
    }
}

export default withRouter(Question);