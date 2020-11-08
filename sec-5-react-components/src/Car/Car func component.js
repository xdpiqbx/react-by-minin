import React from 'react'
import Radium from 'radium'
import classes from './Car.module.scss'

const Car = props => {
    const inputClasses = [classes.input]
    if (props.name !== ""){
        inputClasses.push(classes.green)
    }else{
        inputClasses.push(classes.red)
    }

    if (props.name.length > 4){
        inputClasses.push(classes.bold)
    }

    const style = {
        border: '1px solid #cccccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
            border: '1px solid #aaaaaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
            cursor: 'pointer'
        }
    }
     
    return (
        <div className={classes.Car} style={style}>
            <h2>Car name: {props.name}</h2>
            <p>Year: <strong>{props.year}</strong></p>
            <input
                type='text'
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(" ")}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Radium(Car)