import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyCA-a601Bb9CXYN31daVy3qX20Ozs8kLA0',
	authDomain: 'delighted-pics.firebaseapp.com',
	projectId: 'delighted-pics',
	storageBucket: 'delighted-pics.appspot.com',
	messagingSenderId: '126222905009',
	appId: '1:126222905009:web:454d2805a3f493e3ef3c90',
});

export const auth = app.auth();
export default app;
