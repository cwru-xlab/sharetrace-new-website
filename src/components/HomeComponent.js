import React, {Component} from 'react';
import {Button, Form, Row, Col, FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
var config = require('../config');

class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            email:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        
    }

    render(){
        return(
            <div style={{backgroundColor:"#f6f6f6", marginTop:"0px", marginBottom:"-20px", fontFamily:"Nunito, Arial, Helvetica, sans-serif"}}>
                <div id="introduction">
                    <center><img src="assets/images/Introduction.png" alt="Introduction" style={{width:"30%"}}></img></center>
                </div>
                <br />
                <div id="summary">
                    <center><h5 style={{fontFamily:"Nunito, Arial, Helvetica, sans-serif", color:"#478A83", fontWeight:"bold"}}>INFECTION RISK:</h5></center>
                    <br />
                    <center><h1 className="summary-font-color">DYNAMIC.</h1></center>
                    <center><h1 className="summary-font-color">SOCIAL.</h1></center>
                    <center><h1 className="summary-font-color">ANONYMOUS.</h1></center>
                    <center><h1 className="summary-font-color" style={{textDecoration:"underline", fontWeight:"bold"}}>YOURS.</h1></center>
                    <hr className="seperation" />
                    <Button disabled className="button-sequence" style={{borderRadius:"50%", fontWeight:"900"}}>1</Button>
                    <center><p>We provide people with covid-19 risk scores based on the symptoms and interactions reported by those around them.</p></center>
                    <hr className="seperation" />
                    <Button disabled className="button-sequence" style={{borderRadius:"50%", fontWeight:"900"}}>2</Button>
                    <center><p>We provide individuals and communities with tools to tackle the pandemic</p></center>
                    <hr className="seperation" />
                    <Button disabled className="button-sequence" style={{borderRadius:"50%", fontWeight:"900"}}>3</Button>
                    <center><p style={{marginBottom:"50px"}}>Download sharetrace for ios or android - Coming Soon!</p></center>
                    <Form onSubmit={this.handleSubmit} style={{marginLeft:"auto", marginRight:"auto"}}>
                        <Row>
                            <Col xs={6} sm={{size: 5, offset: 2}} lg={{size: 3, offset: 4}}>
                                <FormGroup>
                                    <Input type="text" id="email" name="email" value={this.state.email} placeholder="email address" style={{borderRadius:"35px", border:"none"}} onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col xs={6} sm={{size: 3}} lg={2}>
                                <FormGroup>
                                    <Button type="submit" value="submit" style={{width: "100%", backgroundColor: "#478A83", borderRadius:"35px", border:"none"}}>Notify me</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <hr className="seperation" style={{marginTop:"5px"}} />
                </div>
                <div id="whyusesharetrace">
                    <div className="row" style={{marginLeft:"auto", marginRight:"auto"}}>
                        <div className="col-12 col-md-5 offset-md-1" style={{marginTop:"auto", marginBottom:"auto"}}>
                            <h3 style={{fontFamily:"Nunito, Arial, Helvetica, sans-serif", color:"#478A83", fontWeight:"bold"}}>Why use sharetrace?</h3>
                            <br />
                            <h6>Contact tracing is key to the flight against the pandemic - but it is not enough.</h6>
                            <br />
                            <p>We help individuals and organisations understand the risk that Covid-19 is spreading through their social networks. We provide a clear and dynamic risk interface that changes based on encounters with both symptomatic and asymptomatic users of the app.</p>
                            <br />
                            <p>ShareTrace gives people the security they need to return to work and social life.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="assets/images/why.png" alt="Why use sharetrace?" style={{width:"95%"}}></img>
                        </div>
                    </div>
                </div>
                <hr className="seperation" style={{marginTop:"5px"}} />
                <div id="ethical">
                    <div className="row" style={{marginLeft:"auto", marginRight:"auto"}}>
                        <div className="col-12 col-md-6">
                            <img src="assets/images/ethical.png" alt="Ethical, Anonymous, User-controlled" style={{width:"95%"}}></img>
                        </div>
                        <div className="col-12 col-md-5" style={{marginTop:"auto", marginBottom:"auto"}}>
                            <h3>ETHICAL,</h3>
                            <h3>ANONYMOUS,</h3>
                            <h3>USER-CONTROLLED</h3>
                            <br />
                            <br />
                            <h2 style={{color:"#478A83"}}>Users <h2 style={{textDecoration:"underline", display:"inline"}}>own</h2> their data.</h2>
                            <br />
                            <p>Sharetrace stores all the data it needs in Personal Data Accounts owned and controlled by each user. Only people given permission by the account owner can see this data.</p>
                            <br />
                            <p style={{fontSize:"13px"}}>With SafeTrace, Personal Data Accounts are empowered to compute private risk scores. Users seeking to understand their network risk can send an anonymised risk score to the SafeTrace server, which uses it as a digital twin and computes hyperlocal network risk scores based on the interactions people have with each other.</p>
                            <br />
                            <p style={{color:"#478A83"}}>No data is stored by ShareTrace.</p>
                        </div>
                    </div>   
                </div>
                <hr className="seperation" style={{marginTop:"5px"}} />
                <div id="whitepaper">
                    <br />
                    <br />
                    <center><h3>THE SHARETRACE <h3 style={{display:"inline", textDecoration:"underline"}}>WHITE PAPER</h3></h3></center>
                    <center><p>Read the ShareTrace technology white paper for information and insights on Personal Data Accounts, our privacy preserving back end architecture, and our exciting network model.</p></center>
                    <br />
                    <div className="row">
                        <div className="col-6 offset-3 col-md-2 offset-md-5">
                            <a href='https://github.com/SafeTrace-community/info/blob/master/ShareTrace%20-%20WhitePaper_may3.pdf'>
                                <Button style={{background:"none", color:"#9b9b9b", borderColor:"#9b9b9b", borderRadius:"35px", width:"100%"}}>Read Policy</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="seperation" style={{marginTop:"50px"}} />
                <div id="bottom" style={{marginTop:"60px", paddingBottom:"100px"}}>
                    <Form onSubmit={this.handleSubmit} style={{marginLeft:"auto", marginRight:"auto"}}>
                        <Row>
                            <Col xs={6} sm={{size: 5, offset: 2}} lg={{size: 3, offset: 4}}>
                                <FormGroup>
                                    <Input type="text" id="email" name="email" value={this.state.email} placeholder="email address" style={{borderRadius:"35px", border:"none"}} onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col xs={6} sm={{size: 3}} lg={2}>
                                <FormGroup>
                                    <Button type="submit" value="submit" style={{width: "100%", backgroundColor: "#478A83", borderRadius:"35px", border:"none"}}>Notify me</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Home;