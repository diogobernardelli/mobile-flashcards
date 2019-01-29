import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORAGE_KEY, formatDeckResults } from './decks';

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatDeckResults)
}

export function getDeck(key) {
  return this.getDecks()
    .then(decks => {
      const deck = Object.entries(decks).find(
        res => {
          return res[1].title.replace(/\s/g, '').toLowerCase() === key.replace(/\s/g, '').toLowerCase();
        }
      )
      return deck[1]
    })
}

export function addDeck(title, image) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      image: image,
      questions: []
    }
  }));
}

export function removeDeck(title) {
  let almostComplete = '';
  const toFilter = title.replace(/\s/g, '').toLowerCase()
  return new Promise(resolve => {

    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
      .then((decks) => JSON.parse(decks))
      .then((decks) => {
        almostComplete = {...decks};

        Object.keys(almostComplete)
          .filter(key => key.replace(/\s/g, '').toLowerCase() === toFilter)
          .reduce((obj, key) => {
            delete almostComplete[[key]];
          }, {});
          
        AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY)
      })
      .then(() => {
          AsyncStorage.mergeItem(
            FLASHCARDS_STORAGE_KEY,
            JSON.stringify(almostComplete))
              .then(resolve(almostComplete))
        }
      )

  })
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
