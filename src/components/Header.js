import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Image } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <div>
        <Menu
          secondary
          borderless
          style={{ backgroundColor: '#fff', border: '1px solid #ddd', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
        >
          <Container text>
            <Menu.Item as={Link} to="/" exact="true">
              <Image size="tiny" src="https://avatars3.githubusercontent.com/u/28728163?s=200&v=4" />
              <Menu.Item header>XSLT SERVICE UI</Menu.Item>
            </Menu.Item>
            <Menu.Item as={NavLink} to="/convert" exact>
              CONVERTER
            </Menu.Item>
            <Menu.Item as={NavLink} to="/validate">
              VALIDATOR
            </Menu.Item>
          </Container>
        </Menu>
        <br />
      </div>
    );
  }
}

export default Header;
