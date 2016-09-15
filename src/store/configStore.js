/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-01 15:50:29
 * @version $Id$
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import logger from 'redux-logger'


const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);
export default function configureStore(initialState){
	const store=createStoreWithMiddleware(reducer,initialState);

	if(module.hot){
		module.hot.accept('../reducers',()=>{
			const nextReducer=require('../reducers');
			store.replaceReducer(nextReducer);
		})
	}

	return store;
}

























