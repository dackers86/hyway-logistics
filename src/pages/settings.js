import React, {Component} from 'react';
import NavBar from '../components/navbar';
import Map from '../components/map';

class Settings extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                Settings Page
            </div>
        );
    }
}

export { Settings };