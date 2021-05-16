import React from 'react';
import Multi from '../comp/comp2';
export default class Multiplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0
            
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
    // calculateMul = () => {
    //     this.setState({
    //         mul: parseInt(this.state.num1) * parseInt(this.state.num2)
    //     })
    // }

    render() {
         return (

            <div>
    <Multi
    valueA={this.state.num1}
    valueB={this.state.num2}
    valueC={this.changeNum1}
    valueD={this.changeNum2}
    />
    </div>


}