import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import SwitchSelector from "react-switch-selector";
import {Link} from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';
var config = require('../config');

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            birthmonth:'',
            birthday:'',
            birthyear:'',
            ssn:'',
            proj:'ShareTrace',
            organization:'NA',
            verifycode:[],
            continue: false,
            downloaded: false,
            downloadedlater: false,
            isNavOpen: false,
            isModalSignUpOpen: false,
            isModalLoginOpen: false,
            isModalProjSelectOpen: false,
            isModalDownloadOpen: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectorChange = this.handleSelectorChange.bind(this);
        this.handleVerifyChange = this.handleVerifyChange.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this);
        this.toggleModalLogin = this.toggleModalLogin.bind(this);
        this.toggleModalProjSelect = this.toggleModalProjSelect.bind(this);
        this.toggleModalDownload = this.toggleModalDownload.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleSubmitCode = this.handleSubmitCode.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModalSignUp(){
        this.setState({
            isModalSignUpOpen: !this.state.isModalSignUpOpen,
        });
    }

    toggleModalLogin(){
        this.setState({
            isModalLoginOpen: !this.state.isModalLoginOpen,
        });
    }

    toggleModalProjSelect(){
        this.setState({
            isModalProjSelectOpen: !this.state.isModalProjSelectOpen,
        });
    }

    toggleModalDownload(){
        this.setState({
            isModalDownloadOpen: !this.state.isModalDownloadOpen,
        });
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSelectorChange(newValue){
        this.setState({
            downloaded: newValue
        })
    }

    handleVerifyChange(index, event){
        var verify = this.state.verifycode;
        verify[index] = event.target.value;
        this.setState({
            verifycode: verify
        });
    }

    handleSignup(event){
        event.preventDefault();
        this.toggleModalProjSelect();
        this.toggleModalSignUp();
        // let databody = {
        //     "firstname": this.state.firstname,
        //     "lastname": this.state.lastname,
        //     "email": this.state.email,
        //     "phone": this.state.phone,
        //     "birthmonth": this.state.birthmonth,
        //     "birthday": this.state.birthday,
        //     "birthyear": this.state.birthyear,
        //     "ssn": this.state.ssn
        // }
        // fetch(config.serverUrl+'/users/signup', {
        //     method: 'POST',
        //     body: JSON.stringify(databody),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        // .then(res => res.json())
        // .then(data => {
        //     this.props.onUsernameChange(data.username, data.authentication);
        //     if(data.success === false) alert(data.msg);
        //     else
        //         this.toggleModalProjSelect();
        //         this.toggleModalSignUp();
        // })
    }

    handleLogin(event){
        event.preventDefault();
        this.props.onUsernameChange(this.state.email, true);
        this.toggleModalLogin();
    }

    handleSubmitCode(event){
        event.preventDefault();
    }

    render(){

        const options = [
            {
                label: "Yes!",
                value: true,
                selectedBackgroundColor: "#478A83"
            },
            {
                label: "No",
                value: false,
                selectedBackgroundColor: "#478A83"
            }
         ];

         const initialSelectedIndex = options.findIndex(({value}) => value === true);

        return(
            <div style={{backgroundImage:"url(/assets/images/BG.jpg)", backgroundSize: 'cover', paddingBottom:"15px"}}>
                <Navbar dark className="custom-header row" expand="lg">
                    <NavbarBrand href="/home" className="col-2 col-md-5">ShareTrace</NavbarBrand>
                    <NavbarToggler id="nav" onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="col-7">
                            <NavItem>
                                <Link className="nav-link" to="/home" style={{color: "white"}}>HOME</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="#" style={{color: "white"}}>NEWS</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/home#whitepaper" style={{color: "white"}}>WHITE PAPER</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/faq" style={{color: "white"}}>FAQ</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/privacypolicy" style={{color: "white"}}>PRIVACY POLICY</Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={this.toggleModalLogin} style={{color: "white"}}>LOGIN</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.toggleModalSignUp} style={{color: "white"}}>SIGNUP</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.isModalSignUpOpen} toggle={this.toggleModalSignUp}>
                    <ModalHeader toggle={this.toggleModalSignUp} className="signup-modal-title"><b>NEW USERS...</b></ModalHeader>
                    <ModalBody>
                        <Form id="signupForm" onSubmit={this.handleSignup}>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <FormGroup>
                                        <Input type="text" id="firstname" className="form-input" name="firstname" value={this.state.firstname} placeholder="first name" onChange={this.handleInputChange}/>
                                    </FormGroup>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormGroup>
                                        <Input type="text" id="lastname" className="form-input" name="lastname" value={this.state.lastname} placeholder="last name" onChange={this.handleInputChange}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup>
                                        <Input type="text" id="email" className="form-input" name="email" value={this.state.email} placeholder="email address" onChange={this.handleInputChange}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup>
                                        <Input type="text" id="phone" className="form-input" name="phone" value={this.state.phone} placeholder="phone number" onChange={this.handleInputChange}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup>
                                        <Label htmlFor="birth" className="form-label">Birthday</Label>
                                        <Row>
                                            <Col xs={4}>
                                                <select name="birthmonth" id="birthmonth" className="form-input" onChange={this.handleInputChange}>
                                                    <option value ="Jan">Jan</option>
                                                    <option value ="Feb">Feb</option>
                                                    <option value ="Mar">Mar</option>
                                                    <option value ="Apr">Apr</option>
                                                    <option value ="May">May</option>
                                                    <option value ="June">June</option>
                                                    <option value ="July">July</option>
                                                    <option value ="Aug">Aug</option>
                                                    <option value ="Sep">Sep</option>
                                                    <option value ="Oct">Oct</option>
                                                    <option value ="Nov">Nov</option>
                                                    <option value ="Dec">Dec</option>
                                                </select>
                                            </Col>
                                            <Col xs={3}>
                                                <Input type="text" id="birthday" className="form-input" name="birthday" value={this.state.birthday} placeholder="18" onChange={this.handleInputChange}/>
                                            </Col>
                                            <Col xs={5}>
                                                <Input type="text" id="birthyear" className="form-input" name="birthyear" value={this.state.birthyear} placeholder="2021" onChange={this.handleInputChange}/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{size: 6}}>
                                    <FormGroup>
                                        <Label htmlFor="ssn" className="form-label">Social Security Number</Label>
                                        <Row>
                                            <Col xs={{size: 3}}>
                                                <p style={{marginLeft:"20%", color:"#acacac"}}>***_**_ </p>
                                            </Col>
                                            <Col xs={6}>
                                                <Input type="text" id="ssn" className="form-input" name="ssn" value={this.state.snn} placeholder="0123" style={{display:"inline-block"}} onChange={this.handleInputChange}/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row style={{marginTop: "10px"}}>
                                <Col xs={12} md={{size: 4}}>
                                    <FormGroup>
                                        <Button type="submit" value="submit" color="primary" style={{width: "100%", borderRadius:"35px", backgroundColor:"#478A83", fontFamily:"Nunito, Arial, Helvetica, sans-serif"}}>Sign Up</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row style={{marginLeft:"-5px"}}>
                                <Button style={{backgroundColor:"white", color:"#478A83", border:"none", textDecoration:"underline", fontStyle:"italic"}} onClick={()=>{this.toggleModalSignUp(); this.toggleModalLogin();}}>ALREADY HAVE AN ACCOUNT?</Button>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalProjSelectOpen} toggle={this.toggleModalProjSelect}>
                    <ModalHeader toggle={this.toggleModalProjSelect} className="signup-modal-title"><b>Please select your project from the list below.</b></ModalHeader>
                    <ModalBody>
                        <Form id="projSelectForm">
                            <Row style={{marginBottom:"20px"}}>
                                <Col sm={{offset: 1, size: 10}}>
                                    <select name="proj" id="proj" className="form-input" onChange={this.handleInputChange}>
                                        <option selected value ="ShareTrace">ShareTrace</option>
                                    </select>
                                </Col>
                            </Row>
                            <Collapse isOpen={this.state.continue}>
                                <Row>
                                    <Col sm={{offset: 1, size: 10}}>
                                        <select name="organization" id="organization" className="form-input" onChange={this.handleInputChange}>
                                            <option disabled selected value="NA">Choose your organization</option>
                                            <option value ="CWRU">Case Western Reserve University</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={{offset: 1, size: 10}}>
                                        <Button style={{backgroundColor:"white", color:"#478A83", border:"none", textDecoration:"underline", fontStyle:"italic"}} onClick={()=>{this.setState({organization:'NA'});this.toggleModalDownload();this.toggleModalProjSelect();}}>I am signing up as an individual.</Button>
                                    </Col>
                                </Row>
                            </Collapse>
                            <Row>
                                <Col sm={{offset: 1, size: 5}}>
                                    <Button style={{backgroundColor:"#478A83", border:"none", borderRadius:"35px",fontStyle:"italic", width:"100%"}} onClick={()=>{if(this.state.organization === 'NA') this.setState({continue: true}); else{this.toggleModalDownload();this.toggleModalProjSelect();}}}>Continue</Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalDownloadOpen} toggle={this.toggleModalDownload}>
                    <ModalHeader toggle={this.toggleModalDownload} className="signup-modal-title"><b>Almost there! Have you downloaded the ShareTrace mobile application yet?</b></ModalHeader>
                    <ModalBody style={{paddingBottom:"50px"}}>
                        <Form id="downloadedForm">
                            <Row>
                                <Col xs={6}>
                                    <FormGroup>
                                        <SwitchSelector 
                                            onChange={this.handleSelectorChange}
                                            initialSelectedIndex={initialSelectedIndex}
                                            options={options}
                                            fontColor="#acacac"
                                            style={{width: "100%", fontFamily:"Nunito, Arial, Helvetica, sans-serif", fontStyle:"italic"}}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <br />
                            <Collapse isOpen={this.state.downloaded}>
                                <h6 className="signup-modal-title" style={{fontSize:"20px"}}>Please verify that you have download and signed into the ShareTrace mobile application by opening it and selecting the number shown on the screen.</h6>
                                <Row>
                                    <Col sm={{size: 10}}>
                                        <Link to="#" style={{color:"#478A83", fontStyle:"italic", textDecoration:"underline"}}>I have not downloaded the app.</Link>
                                    </Col>
                                </Row>
                                <Form id="appverifycode" onSubmit={this.handleSubmitCode}>
                                    <Row>
                                        <Col sm={4} md={2}>
                                            <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[0]} placeholder="18" onChange={(event) => this.handleVerifyChange(0, event)}/>
                                        </Col>
                                        <Col sm={4} md={2}>
                                            <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[1]} placeholder="29" onChange={(event) => this.handleVerifyChange(1, event)}/>
                                        </Col>
                                        <Col sm={4} md={2}>
                                            <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[2]} placeholder="44" onChange={(event) => this.handleVerifyChange(2, event)}/>
                                        </Col>
                                        <Col sm={4} md={2}>
                                            <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[3]} placeholder="47" onChange={(event) => this.handleVerifyChange(3, event)}/>
                                        </Col>
                                        <Col sm={4} md={2}>
                                            <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[4]} placeholder="91" onChange={(event) => this.handleVerifyChange(4, event)}/>
                                        </Col>
                                    </Row>
                                    <Row style={{marginTop:"50px"}}>
                                        <Col xs={12} md={6}>
                                            <Button type="submit" value="submit" color="primary" style={{width: "100%", borderRadius:"35px", backgroundColor:"#478A83", fontFamily:"Nunito, Arial, Helvetica, sans-serif"}}>Verify the number</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Collapse>
                            <Collapse isOpen={!this.state.downloaded}>
                                <Row>
                                    <Col sm={{size: 10}}>
                                        <Link to="#" style={{color:"#478A83", fontStyle:"italic", textDecoration:"underline"}}>Click here to download from the app store.</Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={11} style={{marginLeft:"5%"}}>
                                        <Label style={{fontFamily:"Nunito, Arial, Helvetica, sans-serif", color:"#acacac"}}>
                                            <Input
                                                name="downloadedlater"
                                                type="checkbox"
                                                checked={this.state.downloadedlater}
                                                onChange={this.handleInputChange} />
                                            I have successfully downloaded and logged into the ShareTrace App.
                                        </Label>
                                    </Col>
                                </Row>
                                <Collapse isOpen={this.state.downloadedlater}>
                                    <h6 className="signup-modal-title" style={{fontSize:"20px"}}>Please select the number on the screen of your ShareTrace App when you log in.</h6>
                                    <Form id="appverifycode" onSubmit={this.handleSubmitCode}>
                                        <Row>
                                            <Col sm={4} md={2}>
                                                <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[0]} placeholder="18" onChange={(event) => this.handleVerifyChange(0, event)}/>
                                            </Col>
                                            <Col sm={4} md={2}>
                                                <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[1]} placeholder="29" onChange={(event) => this.handleVerifyChange(1, event)}/>
                                            </Col>
                                            <Col sm={4} md={2}>
                                                <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[2]} placeholder="44" onChange={(event) => this.handleVerifyChange(2, event)}/>
                                            </Col>
                                            <Col sm={4} md={2}>
                                                <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[3]} placeholder="47" onChange={(event) => this.handleVerifyChange(3, event)}/>
                                            </Col>
                                            <Col sm={4} md={2}>
                                                <Input type="text" id="verifycode" className="verifycode-style" name="verifycode" value={this.state.verifycode[4]} placeholder="91" onChange={(event) => this.handleVerifyChange(4, event)}/>
                                            </Col>
                                        </Row>
                                        <Row style={{marginTop:"50px"}}>
                                            <Col xs={12} md={6}>
                                                <Button type="submit" value="submit" color="primary" style={{width: "100%", borderRadius:"35px", backgroundColor:"#478A83", fontFamily:"Nunito, Arial, Helvetica, sans-serif"}}>Verify the number</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Collapse>
                            </Collapse>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalLoginOpen} toggle={this.toggleModalLogin}>
                    <ModalHeader toggle={this.toggleModalLogin} />
                    <ModalBody>
                        <p style={{color:"#CE3E3E", fontStyle:"italic"}}>Looks like you already have an account! Please Sign in here.</p>
                        <Form id="loginForm" onSubmit={this.handleLogin}>
                            <h6 className="signup-modal-title" style={{fontSize:"20px"}}>Welcome Back!</h6>
                            <Row>
                                <Col xs={8}>
                                    <FormGroup>
                                        <Input type="text" id="email" className="form-input" name="email" value={this.state.email} placeholder="email" onChange={this.handleInputChange}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <h6 className="signup-modal-title" style={{fontSize:"20px"}}>Please verify it's you by entering your date of birth OR the last four digits of your SSN.</h6>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup>
                                        <Label htmlFor="birth" className="form-label">Birthday</Label>
                                        <Row>
                                            <Col xs={4}>
                                                <select name="birthmonth" id="birthmonth" className="form-input" onChange={this.handleInputChange}>
                                                    <option value ="Jan">Jan</option>
                                                    <option value ="Feb">Feb</option>
                                                    <option value ="Mar">Mar</option>
                                                    <option value ="Apr">Apr</option>
                                                    <option value ="May">May</option>
                                                    <option value ="June">June</option>
                                                    <option value ="July">July</option>
                                                    <option value ="Aug">Aug</option>
                                                    <option value ="Sep">Sep</option>
                                                    <option value ="Oct">Oct</option>
                                                    <option value ="Nov">Nov</option>
                                                    <option value ="Dec">Dec</option>
                                                </select>
                                            </Col>
                                            <Col xs={3}>
                                                <Input type="text" id="birthday" className="form-input" name="birthday" value={this.state.birthday} placeholder="18" onChange={this.handleInputChange}/>
                                            </Col>
                                            <Col xs={5}>
                                                <Input type="text" id="birthyear" className="form-input" name="birthyear" value={this.state.birthyear} placeholder="2021" onChange={this.handleInputChange}/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{size: 6}}>
                                    <FormGroup>
                                        <Label htmlFor="ssn" className="form-label">Social Security Number</Label>
                                        <Row>
                                            <Col xs={{size: 3}}>
                                                <p style={{marginLeft:"20%", color:"#acacac"}}>***_**_ </p>
                                            </Col>
                                            <Col xs={6}>
                                                <Input type="text" id="ssn" className="form-input" name="ssn" value={this.state.snn} placeholder="0123" style={{display:"inline-block"}} onChange={this.handleInputChange}/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Button type="submit" value="submit" color="primary" style={{width: "100%", borderRadius:"35px", backgroundColor:"#478A83", fontFamily:"Nunito, Arial, Helvetica, sans-serif"}}>Verify</Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;