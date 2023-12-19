import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVNfuO0TNCmeVvaZb41trivDnO7Jt0Mc8",
    authDomain: "devops-course-cc14a.firebaseapp.com",
    projectId: "devops-course-cc14a",
    storageBucket: "devops-course-cc14a.appspot.com",
    messagingSenderId: "889841173088",
    appId: "1:889841173088:web:ccd0bcba4d3890a2727905"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
