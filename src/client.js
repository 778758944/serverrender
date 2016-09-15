/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-29 15:07:54
 * @version $Id$
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configStore'

var store=configureStore();



ReactDOM.render(<Provider store={store}>
	<App/>
	</Provider>,document.getElementById('react-root'));








