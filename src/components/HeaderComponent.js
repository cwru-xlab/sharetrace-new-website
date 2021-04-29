import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';
var config = require('../config');

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            isNavOpen: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div style={{backgroundImage:"url(/assets/images/BG.jpg)", backgroundSize: 'cover', paddingBottom:"15px"}}>
                <Navbar dark className="custom-header row" expand="lg">
                    <NavbarBrand href="/home" className="col-2 col-md-5">ShareTrace</NavbarBrand>
                    <NavbarToggler id="nav" onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="col-7">
                            <NavItem>
                                <NavLink href="/home" style={{color: "white"}}>HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" style={{color: "white"}}>NEWS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#whitepaper" style={{color: "white"}}>WHITE PAPER</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/faq" style={{color: "white"}}>FAQ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" style={{color: "white"}}>PRIVACY POLICY</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#" style={{color: "white"}}>LOGIN</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" style={{color: "white"}}>SIGNUP</NavLink>
                            </NavItem>
                        </Nav>
                    
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;