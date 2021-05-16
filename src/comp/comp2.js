import React from "react";
export default class Multi extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            result1:0
        }
    }
    calculateMul = () => {
        this.setState({
            result1: parseInt(this.props.valueA) * parseInt(this.props.valueB)
        })
    }


    render() {
        return (
            <div style={{backgroundColor:"red"}}>
                <input style= {{backgroundColor:"yellowgreen" }}value={this.props.valueA} onChange={this.props.valueC} /> * <input style={{backgroundColor:"yellowgreen"}} value={this.props.valueB} onChange={this.props.valueD} />
                   = <button style={{backgroundColor:"whitesmoke"}} onClick={this.calculateMul}>mul</button>
                   Result: <input style={{backgroundColor:"yellowgreen"}} value={this.state.result1} />
            </div>
        )
    }

}