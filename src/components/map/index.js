import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {Segment} from 'semantic-ui-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };

    render() {
        return (
            <Segment
                inverted
                textAlign='center'
                style={{minHeight: 1200}}
                vertical
            >
                <div style={style}>
                    <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text={'Kreyser Avrora'}
                        />
                    </GoogleMapReact>
                </div>
            </Segment>
        );
    }
}

const style = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
}

export default Map;