import { combineReducers } from 'redux'
import messageReducer from './messages'
import peopleReducer from './people'

const chatReducer = combineReducers({
	messageReducer,
	peopleReducer
})

export default chatReducer