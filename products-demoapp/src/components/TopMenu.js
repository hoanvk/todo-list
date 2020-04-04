import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import {
    Link
  } from "react-router-dom";
import {CartContext} from '../contexts/Cart';
class TopMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
        isOpen: false
    }
    this.onNavbarClick = this.onNavbarClick.bind(this);
  }
  onNavbarClick(){
    this.setState({isOpen: !this.state.isOpen}); 
  }
  render() {
    const {isOpen} = this.state;
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand>Coders GA</NavbarBrand>
            <NavbarToggler onClick={this.onNavbarClick} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink><Link to="/">Home</Link></NavLink>
                </NavItem>
                <NavItem>
                <NavLink><Link to="/products">Products</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <CartContext.Consumer>
                      {({cartItems}) => <Link to="/products">Cart ({cartItems.length})</Link>}
                    </CartContext.Consumer>
                    
                  </NavLink>
                </NavItem>
            </Nav>
            
            </Collapse>
        </Navbar>
    );
    }
}

export default TopMenu;