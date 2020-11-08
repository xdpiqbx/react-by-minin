import React from 'react'
import classes from './AnswerstList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswerstList = props => {
    return(
        <ul className={classes.AnswerstList}>
            {props.answers.map( (answer, index) =>{
                return (
                    <AnswerItem 
                       key={index}
                       answer={answer}
                       onAnswerClick={props.onAnswerClick}
                       answerState={props.answerState ? props.answerState[answer.id] : null}
                    />
                )
            })}
        </ul>
    )
}

export default AnswerstList