import { AnyAction } from 'redux'
import { UPDATE_STOP } from '../types'

const initialState = {}

const stopReducer = (state = initialState, action : AnyAction) => {
    switch(action.type) {
        case UPDATE_STOP:
        return {
            ...state,
            ...action.payload,
        }
        default: return state
    }
}

export default stopReducer;