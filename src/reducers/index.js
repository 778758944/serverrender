/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-29 16:49:05
 * @version $Id$
 */
import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import todosReducer from './todosReducer'

const rootReducer=combineReducers({
	counter:counterReducer,
	todos:todosReducer
})

































