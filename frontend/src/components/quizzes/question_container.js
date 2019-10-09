import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Question from './question';

const msp = (state, props) => {
    const question = props.question;
    const problem = props.problem;
    const explanation = props.explanation;
    const options = props.options;
    const questions = props.questions;
    const counter = props.counter;
     
    return {
        // question: question,
        // problem: problem,
        // explanation: explanation,
        // options: options,
        // questions: questions,
        // counter: counter
    }
}

export default connect(msp)(Question)