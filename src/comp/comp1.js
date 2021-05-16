import React from "react";
export default class Comp1 extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state={a:10,b:12}
    }
    hello = () =>
    {
        return(
        
        <div>this a arrow function</div>
            
        )
    };
    changeB = () => {
        this.setState({
            b:90
        })
    }
    render()
    {
        return(
            <div>
    
                <h1>hello world</h1>

                <input
                 value ={this.state.b} 
                onClick={this.changeB}/>


                { <button>{this.state.a*this.state.b}</button>
                
                }
                
            </div>
        )
    }
}