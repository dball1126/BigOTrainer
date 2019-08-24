import React from 'react';

class QuizBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzes: []
        }
    }

    componentWillMount() {
        this.props.fetchQuizzes();
    }
    componentWillReceiveProps(newState) {
        this.setState({ quizzes: newState.quizzes })
    }

    render() {
        
        return (
            <div>
                <h3>main quiz component</h3>
            </div>
        )
    }
}

export default QuizBox;