import { createStore } from 'redux'
import chatReducer from 'reducers/index'

const chatStore = createStore(chatReducer)

export default chatStore    