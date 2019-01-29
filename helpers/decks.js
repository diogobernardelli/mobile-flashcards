import { AsyncStorage } from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'MobileFlashCards:n!@?gdb2cC!~:Z9I?2';

export function formatDeckResults(results) {
    return results === null
      ? setInitData()
      : JSON.parse(results);
}

function setInitData() {
    const initData = {
        ['React']: {
					title: 'React',
					image: 'back01.png',
						questions: [
						{
							question: 'What is React?',
							answer: 'A library for managing user interfaces'
						},
						{
							question: 'Where do you make Ajax requests in React?',
							answer: 'The componentDidMount lifecycle event'
						}
					]
        },
        ['Javascript']: {
					title: 'JavaScript',
					image: 'back02.png',
					questions: [
						{
							question: 'What is a closure?',
							answer: 'The combination of a function and the lexical environment within which that function was declared.'
						}
					]
				},
				['PHP']: {
					title: 'PHP',
					image: 'back03.png',
						questions: [
						{
							question: 'Is PHP better than any language?',
							answer: 'Oh boy, for sure!'
						}
					]
				},
				['SaintSeiya']: {
					title: 'Saint Seiya',
					image: 'back04.png',
						questions: [
					]
        },
    };

    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initData));

    return initData;
}