import { AsyncStorage } from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'MobileFlashCards:m!@?ga53dd!~:Z!9I?2';

export function formatDeckResults(results) {
	return results === null
		? setInitData()
		: JSON.parse(results);
}

function setInitData() {
    const initData = {
			['React']: {
				title: 'React',
				image: 'https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png',
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
				image: 'https://uploads.toptal.io/blog/image/125783/toptal-blog-image-1522333595770-14ba14a2f6099482fa9189f8764dd5ad.png',
				questions: [
					{
						question: 'What is a closure?',
						answer: 'The combination of a function and the lexical environment within which that function was declared.'
					}
				]
			},
			['PHP']: {
				title: 'PHP',
				image: 'https://static.imasters.com.br/wp-content/uploads/2018/06/22153245/php-post-1.png',
					questions: [
					{
						question: 'Is PHP better than any language?',
						answer: 'Oh boy, for sure!'
					}
				]
			},
			['Saint Seiya']: {
				title: 'Saint Seiya',
				image: 'https://img.ibxk.com.br/2017/11/27/27171512909346.jpg',
					questions: [
				]
			},
			['Udacity']: {
				title: 'Udacity',
				image: 'https://d125fmws0bore1.cloudfront.net/assets/pages/jobs/hero-jobs-01-f8627dd2868b8aaa85c735d1104eb0954b6afd28248dd2f47d17c86a3728dcd5.jpg',
					questions: [
						{
							question: 'Is Udacity the best?',
							answer: 'Sure, man!'
						}
				]
			},
    };

    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initData));

    return initData;
}