import React from 'react'
import PropTypes from 'prop-types';
import classes from './Car.module.scss'
import widthClass from '../hoc/widthClass'

class Car extends React.Component{

    constructor(props){
        super(props)
        this.inputRef  = React.createRef()
    }

    state = {}

    componentDidMount(){ // Значит что уже отработал рендер
        //nтеперь можно поработать с готовым деревом
        //console.log('App -> component Did Mount()');
        //console.log(this.inputRef);
        if(this.props.index === 1){
            this.inputRef.current.focus()
            //  this.inputRef.focus()
        }

    }
    
    render() {

        const inputClasses = [classes.input]
        if (this.props.name !== ""){
            inputClasses.push(classes.green)
        }else{
            inputClasses.push(classes.red)
        }
        
        if (this.props.name.length > 4){
            inputClasses.push(classes.bold)
        }
        
        return (
            // <div className={classes.Car}>
            <React.Fragment>
                <h2>Car name: {this.props.name}</h2>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref = {this.inputRef}
                    type='text'
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(" ")}
                    />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
            // </div>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default widthClass(Car, classes.Car)