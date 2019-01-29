export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
export const GET_DECK = 'GET_DECK';

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks
	}
}

export function addDeck(title, image) {
	return {
		type: ADD_DECK,
		title,
		image
	}
}

export function removeDeckAction(decks) {
	return {
		type: REMOVE_DECK,
		decks
	}
}

export function addCardToDeck(title, question, answer) {
	return {
		type: ADD_CARD_TO_DECK,
		card: { title, question, answer }
	}
}