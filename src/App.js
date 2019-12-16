import React from 'react';
import './App.css';
import Container from "reactstrap/es/Container";
import Navigation from "./components/navigation/navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home/home";
import AboutUs from "./components/aboutUs/aboutUs";
import Contacts from "./components/contacts/contacts";


function App() {
  return (
    <Container>
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/aboutUs' component={AboutUs}/>
                <Route path='/contacts' component={Contacts}/>
                <Route render={() => <h1>404</h1>}/>
            </Switch>
        </Router>
    </Container>
  );
}

export default App;
