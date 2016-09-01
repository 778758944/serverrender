/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-29 17:04:34
 * @version $Id$
 */
export default function counterReducer(counter,action){
	switch (action.type){
		case 'INCREMENT':
			return counter+1;
			break;

		default:
			return counter
	}
}
