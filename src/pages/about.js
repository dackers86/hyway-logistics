import React, {Component} from 'react';
import NavBar from '../components/navbar';
import Map from '../components/map';

class About extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                About Us Page
            </div>
        );
    }
}

export { About };