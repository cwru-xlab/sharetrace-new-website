import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

const UsernameContext = React.createContext('');

class Main extends Component{

    constructor(props){
        super(props);
        this.state = { username: '', authentication: false};
    }

    onUsernameChange = (username, authentication) => {
        this.setState({ 
            username: username,
            authentication: authentication
        });
    }

    render(){
        return(
            <div>
                <UsernameContext.Provider value={{state: this.state}}>
                    <Header history={this.props.history} onUsernameChange={this.onUsernameChange} username={this.state.username} authentication={this.state.authentication}/>
                    <Switch>
                        <Route exact path="/home" component={()=><Home history={this.props.history} location={this.props.location} username={this.state.username} authentication={this.state.authentication} onUsernameChange={this.onUsernameChange}/>} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </UsernameContext.Provider>
            </div>
        );
    }

}

export default withRouter(Main);