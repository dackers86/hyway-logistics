import React, {Component} from 'react';
import NavBar from '../components/navbar';
import Map from '../components/map';

class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Map/>
            </div>
        );
    }
}

export { Dashboard };