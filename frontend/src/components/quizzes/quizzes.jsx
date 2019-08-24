import React from 'react';
import { withRouter } from 'react-router-dom';
import QuizBox from './quizz_box';

class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quizzes: []
        }
    }

    componentWillMount() {
        this.props.fetchQuizzes();
    }

    componentWillReceiveProps(newState){
        this.setState({ quizzes: newState.quizzes})
    }

    render() {
        if (this.state.quizzes.length === 0) {
            return (<div>There are no Quizzes</div>)
        } else {
            return (
                <div>
                    <h2>All Quizzes</h2>
                    {this.state.quizzes.map(quiz => (
                        <QuizBox key={quiz._id} name={quiz.name} />
                    ))}
                </div>
            )
        }
    }
}

export default withRouter(Quiz);