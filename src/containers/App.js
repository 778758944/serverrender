/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-04 14:21:23
 * @version $Id$
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Counter from '../components/counter.jsx'
import * as CounterActions from '../actions/counter'


//将state.counter绑定到props的counter
function mapStateToProps(state){
	return {
		counter:state.counter
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(CounterActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)







































