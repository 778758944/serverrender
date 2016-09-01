/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-29 11:11:06
 * @version $Id$
 */
var isNode=typeof module !=='undefined' && module.exports,
	React=isNode ? require('react'):window.React,
	ReactDom=isNode ? require('react'):window.ReactDOM;

var HelloMessage=React.createClass({
	handleClick:function(){
		alert('you clicked')
	},

	componentWillMount:function(){
		console.log('sdsdsds')
	},

	render:function(){
		return <div onClick={this.handleClick}>Hello {this.props.name}</div>
	}
})

if(isNode){
	exports.HelloMessage=HelloMessage
}
else{
	ReactDOM.render(<HelloMessage name='messi'/>,document.getElementById('react-root'));
}





















