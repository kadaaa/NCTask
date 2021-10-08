import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

const NavBar = () => {
    const [ activeItem, setActiveItem ] = useState('home');
    return <Segment inverted>
        <Menu inverted pointing secondary>
            <Menu.Item
                as={Link}
                to='/'
                name='home'
                active={activeItem === 'home'}
                onClick={() => setActiveItem('home')}
            />
            <Menu.Item
                as={Link}
                to='/stations'
                name='stations'
                active={activeItem === 'stations'}
                onClick={() => setActiveItem('stations')}
            />
        </Menu>
    </Segment>
}

export default NavBar;