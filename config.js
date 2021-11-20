import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAlb5boC8nTVrkJDA7OsTb0bE0N5lhgwo0",
  authDomain: "santa-app-e316e.firebaseapp.com",
  projectId: "santa-app-e316e",
  storageBucket: "santa-app-e316e.appspot.com",
  messagingSenderId: "6477139333",
  appId: "1:6477139333:web:9a087eccc433604cd448ec"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
