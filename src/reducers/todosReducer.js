/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-29 17:07:07
 * @version $Id$
 */
export default function todosReducer(todos,action){
	switch(action.type){
		case 'ADD_TODO':
			return [..todos,action.payload]
			break;

		default:
			return todos;
	}
}


