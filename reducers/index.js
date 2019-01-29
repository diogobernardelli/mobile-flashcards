import { ADD_CARD_TO_DECK, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../actions';

function decks(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks,
			};
				
		case ADD_DECK:
			return {
				...state,
				[action.title]: {
					title: action.title,
					image: action.image,
					questions: []
				}
			};
		case REMOVE_DECK:
			return action.decks
		case ADD_CARD_TO_DECK:
			console.log("===>", action);
			return {
				...state,
				[action.card.title]: {
					title: action.card.title,
					questions: [
						...state[action.card.title].questions,
						{ question: action.card.question, answer: action.card.answer }
					]
				}
			};
		default :
			return state
	}
}

export default decks;