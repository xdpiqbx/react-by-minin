import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        props.isOpen ? classes.open : null
    ] 
    return(
        <span 
            className={cls.join(' ')}
            onClick={props.onToggle}
        >
            <FontAwesomeIcon icon={ props.isOpen ? faTimes : faBars } />
        </span>
    )
}

export default MenuToggle