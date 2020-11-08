import React from 'react'

export default props => (
    <div style={{
        border: '1px solid #cccccc',
        marginBottom: '10px'
    }}>
        <h2>Car name: {props.name}</h2>
        <p>Year: <strong>{props.year}</strong></p>
        <input type='text' onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)