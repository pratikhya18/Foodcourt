import React from 'react';
var a = 18;
var b = 50;
var c;
c=a+b;
export default class Fctun extends React.Component{
    constructor(props){
        super(props);
        this.state ={num1:0,
            num2:0}

    }
    myFunctionOk =(e)=>
    {
        this.setState({
        
            num1:8,//dobut ?
            num2:9

         })
    } 
    myfunction = ()=>
    {
        return(
            
             this.state.num1 + this.state.num2

        )
    }
    
    render()
    {
        return(
            <div>
            <div>
                <input value = {this.state.num1}/>
                +<input value ={this.state.num2}/>=
                <input value ={this.myfunction()} onChange ={this.myFunctionOk} />
                {/* <button onClick ={this.handleClick}> */}
                    {/* clickme
                </button> */}
            </div>
            </div>
        )
    }
}