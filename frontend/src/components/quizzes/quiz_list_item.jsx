import React from 'react';

const QuizListItem = ({name, level}) => {
      
        return (
            <div className="quiz-item">
                <h3 className="quiz-name">{name}</h3>
                <h3>{level}</h3>
            </div>
        )
}

export default QuizListItem;