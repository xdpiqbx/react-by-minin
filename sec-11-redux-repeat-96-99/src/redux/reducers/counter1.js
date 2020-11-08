import {ADD, SUB, ADD_NUMBER, SUB_NUMBER} from '../actions/actionTypes'

const initialState = {
    counter1: 100
}

export default function counter1 (state = initialState, action){
    switch (action.type){
        case ADD:
            return{
                counter1: state.counter1 + 1
            }
        case SUB:
            return{
                counter1: state.counter1 - 1
            }
        case ADD_NUMBER:
            return{
                counter1: state.counter1 + action.payload
            }
        case SUB_NUMBER:
            return{
                counter1: state.counter1 - action.payload
            }
        default:
            return state
    }
}