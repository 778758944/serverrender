/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-01 15:09:17
 * @version $Id$
 */
import React,{Component,PropTypes} from 'react'

class Counter extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const {increment,incrementIdOdd,incrementAsync,decrement,counter} = this.props;
		return (
			<p>
				Clicked:{counter} times
				{' '}
				<button onClick={increment}>+</button>
				{' '}
				<button onClick={decrement}>-</button>
				{' '}
				<button onClick={incrementIdOdd}>Increment if odd</button>
				{' '}
				<button onClick={()=>incrementAsync()}>Inscement async</button>	
			</p>
			)
	}
}

export default Counter





























