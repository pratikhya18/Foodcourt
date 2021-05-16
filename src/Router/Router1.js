import React from 'react';
import {BrowserRouter,Route}from "react-router-dom";
import Multiplication from "../practice/multiplication";



export default class Router extends React.Component{
    render()
    {
        return(
            <div>
                <BrowserRouter>
                <Route path = "/multiply" component ={Multiplication}/>
                </BrowserRouter>
            </div>
        )
    }
    
}