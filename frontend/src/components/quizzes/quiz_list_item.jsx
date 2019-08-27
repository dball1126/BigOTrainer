import React from 'react';
import {Link} from 'react-router-dom';

const QuizListItem = ({key, name, level}) => {
      
        return (
            <div className="quiz-item">
                <h3 className="quiz-name">{name}</h3>
                <h3>{level}</h3>
                <div className="begin-quiz">
                    <Link to={`/quizzes/${key}`} className="begin-quiz-button">Begin</Link>
                </div>
            </div>
        )
}

export default QuizListItem;