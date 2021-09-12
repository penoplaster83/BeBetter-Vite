import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { } from 'firebase/auth';
import { } from 'firebase/firestore';
import { } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
import './index.css'



// https://firebase.google.com/docs/web/setup#available-libraries

// My web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCtENZOM3Exg4-rcHnWqyrR6Cmzpa4H8cM",
  authDomain: "bebettervite.firebaseapp.com",
  projectId: "bebettervite",
  storageBucket: "bebettervite.appspot.com",
  messagingSenderId: "659757073072",
  appId: "1:659757073072:web:4a0ccc320a79e1c1f67175",
  measurementId: "G-0YJCDY70NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

createApp(App).use(router).use(store).mount('#app')
