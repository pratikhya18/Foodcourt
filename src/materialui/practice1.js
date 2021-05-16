import React from 'react';
import {Icon,Button} from "@material-ui/core";
import HomeIcon from "@material-ui/icons";
export default class  Materialui extends React.Component{
    constructor(props){
    super(props);
    this.state={
name:""
    }

    }
    render()
    {
        return(
            <div>
                
                <HomeIcon fontSize="small" />
                <HomeIcon />
                
            </div>
        )
    }
}