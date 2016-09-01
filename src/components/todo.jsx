/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-30 14:35:08
 * @version $Id$
 */
import React from 'react'

class TodoList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<div>
					<input type='text'/>
					<button>add</button>
				</div>
			</div>
			)
	}
}

export default TodoList


































