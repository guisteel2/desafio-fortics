import { combineReducers } from 'redux'
import ReturnRedux from '../Actions/ReturnReducers'

const rootReducer = combineReducers({
    todo: ReturnRedux
})

export default rootReducer