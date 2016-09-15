/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-01 15:29:15
 * @version $Id$
 */
export const INCREMENT_COUNTER='INCREMENT_COUNTER'
export const DECREMENT_COUNTER='DECREMENT_COUNTER'


export function increment(){
	return {
		type:INCREMENT_COUNTER
	}
}

export function decrement(){
	return {
		type:DECREMENT_COUNTER
	}
}


export function incrementIfOdd(){
	return (dispatch,getState)=>{
		const {counter}=getState();

		if(counter % 2 == 0){
			return
		}

		dispatch(increment())
	}
}

export function incrementAsync(delay = 1000){
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment());
		},delay)
	}
}










































