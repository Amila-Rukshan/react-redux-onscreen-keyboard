import {combineReducers} from 'redux'
import inputsReducer from './inputsReducer'

const rootReducer = combineReducers({
    inputs: inputsReducer,
})

export default rootReducer