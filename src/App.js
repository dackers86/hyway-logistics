import React, {Component} from 'react';
import {Router, browserHistory, Route} from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import firebase from 'firebase';
import db from './database/firebase';

import {Dashboard, About, Settings} from './pages';

class App extends Component {
    render() {

        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('user', user);
        }).catch(function(error) {
            console.log('error', error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

        return (
            <Router history={browserHistory}>
                <Route path="/" component={Dashboard}/>
                <Route path="/about" component={About}/>
                <Route path="/settings" component={Settings}/>
            </Router>
        );
    }
}

export default App;