import React, { Component } from 'react';
import {baseUrl} from '../shared/baseUrl';
var config = require('../config');

class Footer extends Component{
    render(){
        return(
            <div style={{paddingTop:"300px", paddingBottom:"5px",backgroundImage:"url(/assets/images/BGbtm.jpg)", backgroundSize: 'cover', height:"100%", width:"100%"}}>
                <img src="assets/images/logo.png" alt="CWRU WeatherHead School of Management" style={{marginLeft:"10px",width:"15%"}}></img>
                <center><p style={{color:"white"}}>© sharetrace. All rights reserved.</p></center>
            </div>
        );
    }
}

export default Footer;