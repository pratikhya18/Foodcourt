import React from 'react';
export default class Practice3 extends React.Component{
    constructor(props){
        super(props);
            this.state={
                num1:0,
                num2:0,
                addition:0
            }
    }
    num1Change=(e)=>
    {
        this.setState({
            num1:e.target.value
        })
    }
    num2Change=(e)=>
    {
        this.setState({
            num2:e.target.value
        })
    }
    AdditionClick=()=>
    {
        this.setState({
            addition : parseInt(this.state.num1) + parseInt(this.state.num2)

        })
    }
    render()
        {
            return(
                <div>
                <input value = {this.state.num1} onChange ={this.num1Change}/> + 
                <input value = {this.state.num2} onChange = {this.num2Change}/>
                =
                <button onClick ={this.AdditionClick}>
                    add
                </button>
              Result: <input value = {this.state.addition}/>
                </div>

            )
        }
}