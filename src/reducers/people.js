const initState = [
	'Alex',
	'john',
	'Sam',
	'Bob',
	'Bill',
	'wwwww'

]

const peopleReducer = (state = initState, action) => {
	if (action.type === 'ADD_NEW_USER') {
		return state.concat('Alexxx' + Date.now())
	}
	return state
}

export default peopleReducer