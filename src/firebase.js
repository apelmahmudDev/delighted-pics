import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;

// apiKey: 'AIzaSyCA-a601Bb9CXYN31daVy3qX20Ozs8kLA0',
// 	authDomain: 'delighted-pics.firebaseapp.com',
// 	projectId: 'delighted-pics',
// 	storageBucket: 'delighted-pics.appspot.com',
// 	messagingSenderId: '126222905009',
// 	appId: '1:126222905009:web:454d2805a3f493e3ef3c90',
