import React from 'react';
import Multiplication from './multiplication';
import Division from './division';
export default class Substraction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: 0,
            num2: 0,
            sub: 0
        }
    }
    changeNum1 = (e) => {
        this.setState({
            num1: e.target.value
        })
    }
    changeNum2 = (e) => {
        this.setState({
            num2: e.target.value

        })
    }
    calculateSub = () => {
        this.setState({
            sub: parseInt(this.state.num1) - parseInt(this.state.num2)
        })
    }

    render() {
        return (
            <div style={{backgroundColor:"red"}}>
                <input style={{backgroundColor:"yellowgreen"}}value={this.state.num1} onChange={this.changeNum1} /> - <input style={{backgroundColor:"yellowgreen"}} value={this.state.num2} onChange={this.changeNum2} />
                   = <button style={{backgroundColor:"whitesmoke"}} onClick={this.calculateSub}>sub</button>
                   Result: <input style={{backgroundColor:"yellowgreen"}} value={this.state.sub} />
            </div>
        )
    }

}