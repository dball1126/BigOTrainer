import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const QuizListItem = ({name, level, id, quizzesWon, quizzesLost, userEmail, timesTaken}) => {
    
        return (
            <div className="quiz-item">
                <div className="quiz-details">
                    <h3 className="quiz-name">{name}</h3>
                    <h3 className="quiz-level">Level: {level}</h3>
                    <h3 className="times-taken">Times taken: {timesTaken}</h3>
                </div>
                <div className="begin-quiz">
                    <Link to={{ pathname: `/quizzes/${id}`, quizzesWon: quizzesWon , quizzesLost: quizzesLost , userEmail: userEmail }} className="begin-quiz-button" >Begin</Link>
                </div>
            </div>
        )
}

export default withRouter(QuizListItem);