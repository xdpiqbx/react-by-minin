import React from 'react'
import classes from './FinishedQuiz.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
    
    const sucsessCount = Object.keys(props.results).reduce((total, key)=>{
        if(props.results[key] === 'success'){
            total += 1
        }
        return total
    }, 0)

    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index)=>{
                    
                    const icons = [
                        props.results[quizItem.id] === 'error' ? 'error' : 'success',
                        props.results[quizItem.id] === 'error' ? faTimes : faCheck
                    ]   

                    return(
                        <li key={index}>
                            <strong>{index+1}.&nbsp;</strong>
                                {quizItem.question}
                            <span className={icons[0] === 'error' ? classes.error : classes.success}>
                                <FontAwesomeIcon icon={ icons[1] } />
                            </span>
                        </li>
                    )
                })}
            </ul>
            <p>Правильно {sucsessCount} из {props.quiz.length}</p>
            <div>
                <Button
                    onClick={props.onRetry}
                    type="primary"
                >
                    Повторить
                </Button>
                <Button
                    onClick={props.onRetry}
                    type="success"
                >
                    Перейти в список тестов
                </Button>
            </div>
        </div>
    )
}

export default FinishedQuiz