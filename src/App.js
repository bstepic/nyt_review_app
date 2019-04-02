import React, {Component} from 'react';
import './App.scss';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import {PrivateRoute} from "./components/PrivateRoute";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";

class App extends Component {
    /**
     * Set api default url for any http requests
     */
    componentDidMount(){
        axios.defaults.baseURL = 'https://api.nytimes.com/svc/books/v3';
    }

    render(){
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <Route path="/login" component={Login}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
