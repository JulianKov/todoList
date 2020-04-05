const initialState = {
	cards: [1, 2, 3, 5],
};

function addCard(state, action) {
	const cards = [...state.cards];
	const data = action.payload;
	cards.push(data);
	return {
		...state,
		cards
	}
}

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_CARD':
			return addCard(state, action);
		default:
			return state
	}
}
