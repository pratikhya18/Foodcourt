import { ImageOutlined } from "@material-ui/icons";

import react from 'react';
import {BrowserRouter,Router}from 'react-router-dom';
import Router from './Router1';
export default class Router2 extends React.Component{
    render()
    {
        return(
            <div>
                <BrowserRouter>
                <Router path ="/Router1" Component={Router1}/>
                </BrowserRouter>
            </div>
        )
    }
} 