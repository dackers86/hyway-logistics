import React from 'react';
import {Router, browserHistory, Route, Link} from 'react-router';
import {Sidebar, Segment, Button, Menu, Image, Icon, Header, Sticky} from 'semantic-ui-react'

class NavBar extends React.Component {
    render() {
        return (
            <div className='pusher'>
                <div className='full height'>
                    <div className='toc'>
                        <Menu as={Menu} width='thin' className='inverted horizontal bottom fixed'>
                            <Menu.Item>
                                <Icon name='dashboard'/>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item name='browse' onClick={this.handleItemClick}>
                                <Icon name='grid layout'/>
                                <Link to="/about">About</Link>
                            </Menu.Item>
                            <Menu.Item name='messages' onClick={this.handleItemClick}>
                                <Icon name='grid layout'/>
                                <Link to="/settings">Settings</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar