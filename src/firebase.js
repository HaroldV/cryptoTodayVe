import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDm6wiVoZo0aPyni6dyUiQcIV9Wp_MEV18",
    authDomain: "cryptotodayve.firebaseapp.com",
    databaseURL: "https://cryptotodayve.firebaseio.com",
    projectId: "cryptotodayve",
    storageBucket: "cryptotodayve.appspot.com",
    messagingSenderId: "654710689813",
    appId: "1:654710689813:web:2df7f8d965577df0797e1c"
}

let app = firebase.initializeApp(config);
let db = app.database();
let notifications = db.ref('notifications');

export {
    notifications,
};