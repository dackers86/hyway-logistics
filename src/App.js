import React, {Component} from 'react';
import {Router, browserHistory, Route} from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import {Dashboard, About, Settings} from './pages';

class App extends Component {
    render() {
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