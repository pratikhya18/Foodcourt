import React from "react";
import '../../../riya-app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../../riya-app/node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router";
import About from "./About";
 import Login from "./Login";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
const App = () =>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
           <Route exact path="/Login" component={Login}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/"></Redirect>

        </Switch>
        </>
    );
};
export default App;