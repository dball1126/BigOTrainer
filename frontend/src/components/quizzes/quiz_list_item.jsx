import React from 'react';

class QuizListItem extends React.Component {
    

    render() {
        
        
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h3>{this.props.level}</h3>
            </div>
        )
    }
}

export default QuizListItem;