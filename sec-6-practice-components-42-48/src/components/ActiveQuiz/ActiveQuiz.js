import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerstList from './AnswerstList/AnswerstList'

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2.</strong>&nbsp;
                    Question
                </span>
                <small>4 form 12</small>
            </p>
            <AnswerstList
                answers={props.answers}
            />
        </div>
    )
}
export default ActiveQuiz