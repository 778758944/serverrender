/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-29 11:11:06
 * @version $Id$
 */
import React from 'react'

var HelloMessage=React.createClass({
	handleClick:function(){
		alert('you clicked')
	},

	componentWillMount:function(){
		// console.log('sdsdsds')
	},

	componentDidMount:function(){
		console.log('did mount')
	},

	render:function(){
		return <div onClick={this.handleClick}>Hello {this.props.name}</div>
	}
});

export default HelloMessage





















