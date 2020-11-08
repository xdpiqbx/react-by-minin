import {ADD2, SUB2, ADD_NUMBER2, SUB_NUMBER2} from '../actions/actionTypes'

const initialState = {
    counter2: 200
}

export default function counter2 (state = initialState, action){
    switch (action.type){
        case ADD2:
            return{
                counter2: state.counter2 + 1
            }
        case SUB2:
            return{
                counter2: state.counter2 - 1
            }
        case ADD_NUMBER2:
            return{
                counter2: state.counter2 + action.payload
            }
        case SUB_NUMBER2:
            return{
                counter2: state.counter2 - action.payload
            }
        default:
            return state
    }
}