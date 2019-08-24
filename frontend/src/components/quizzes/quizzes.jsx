import React from 'react';
import { withRouter } from 'react-router-dom';
import QuizListItem from './quiz_list_item';

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
                        <QuizListItem key={quiz._id} name={quiz.name} level={quiz.date}/>
                    ))}
                </div>
            )
        }
    }
}

export default withRouter(Quiz);