import React from 'react';

const QuizListItem = ({name, level}) => {
      
        return (
            <div>
                <h3>{name}</h3>
                <h3>{level}</h3>
            </div>
        )
}

export default QuizListItem;