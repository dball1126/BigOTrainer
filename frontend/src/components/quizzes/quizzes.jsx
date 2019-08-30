import React from 'react';
import { withRouter } from 'react-router-dom';
import QuizListItem from './quiz_list_item';
import NavBar from '../nav/navbar_container';
class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quizzes: []
        }
    }

    componentDidMount() {
        this.props.fetchQuizzes();
    }

    UNSAFE_componentWillReceiveProps(newState){
        this.setState({ quizzes: newState.quizzes})
    }

    render() {
        if (this.state.quizzes.length === 0) {
            return (<div>There are no Quizzes</div>)
        } else {
            
            return (
                <div className="quizzes-container">
                    <NavBar />

                    <div className="quiz-title">
                        <h2>Time Compexity Quizzes</h2>
                    </div>
                    <div className="quiz-item-container">
                        <div className="quiz-item-box">
                            {this.state.quizzes.map(quiz => (
                                <QuizListItem key={quiz._id} id={quiz._id} name={quiz.name} level={quiz.date}/>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(Quiz);