import { combineReducers } from 'redux'
import roomReducer from './roomReducer'


export default combineReducers({
	posts: roomReducer
})