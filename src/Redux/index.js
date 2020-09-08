import { combineReducers } from 'redux'
import LogReducer from './LogReducer'
import PeopleReducer from './PeopleReducer'


export default combineReducers({
    log: LogReducer,
    people: PeopleReducer
})