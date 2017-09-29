
const firebase = require('firebase');

const instance = firebase.initializeApp(
    {
        apiKey: "AIzaSyAzh9gVkRZuMcOr5w0acOlVVnw9BBSwd34",
        authDomain: "hyway-logistics.firebaseapp.com",
        databaseURL: "https://hyway-logistics.firebaseio.com",
        projectId: "hyway-logistics",
        storageBucket: "hyway-logistics.appspot.com",
        messagingSenderId: "14434338805"
    }
);

module.exports = instance;

