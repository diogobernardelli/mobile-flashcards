import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORAGE_KEY, formatDeckResults } from './decks';

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      return formatDeckResults(results);
    })
}

export function getDeck() {

}

export function addDeck(title) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }));
}

export function addCardToDeck(title, question, answer) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const card = JSON.parse(results)[title];

      return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [card.title]: {
          title: card.title,
          questions: [...card.questions, { question, answer }]
        }
      }));
    });
}
