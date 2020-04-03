import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class TopMenu extends Component {
    render() {
        return (
          <Router>
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/">Home</Link></NavbarBrand>
        <NavbarToggler 
            // onClick={toggle} 
        />
        <Collapse 
            // isOpen={isOpen} 
            navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/users">Users</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/about">About</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
            
        );
    }
}

export default TopMenu;
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}