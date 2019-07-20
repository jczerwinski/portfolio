import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import './header.scss'

import { Container, Navbar, Nav, NavItem, NavLink, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap'

let elements = [
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'CV',
    link: '/cv'
  },
  {
    name: 'Portfolio',
    link: '/portfolio'
  },
  {
    name: 'Blog',
    link: '/'
  }
];

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      active: elements.find(e => e.link === props.location.pathname)
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          let ctx = this;
          return (
            <Navbar expand="sm">
              <Container>
                <NavbarBrand tag={Link} to="/" className="mr-auto">{data.site.siteMetadata.title}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2" />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav navbar className="ml-auto">
                    {elements.map((e, i) => <NavItem key={i}><NavLink active={e === ctx.state.active} tag={Link} to={e.link}>{e.name}</NavLink></NavItem>)}
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          );
        }}
      />
    )
  }
}
