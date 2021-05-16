import React, { Component } from 'react';
export default class Array1 extends React.Component{
    constructor(props){
        super(props);
        
            this.state={arr1:['hello']}

    }
    handlePush=()=>
    {
        var temp=this.state.arr1;
        temp.push('heyy');
        this.setState({arr1:temp})  
    }
    render(){
        return(
            <div>
                 array is =  {this.state.arr1.map((single,i)=>{
                    return(<li>{single}</li>)
                 })}
                 <br/>
                 <button onClick = {this.handlePush}>push</button>
            </div>
        )
    }

}