import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerstList from './AnswerstList/AnswerstList'

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.answerNumber} form {props.quizLength}</small>
            </p>
            <AnswerstList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                answerState={props.answerState}
            />
        </div>
    )
}
export default ActiveQuiz