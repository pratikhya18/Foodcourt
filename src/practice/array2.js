import React from 'react';
import { render } from 'react-dom';
export default class Array2 extends React.Component {
    constructor(props) {
        super(props);
        {
            this.state = {
                arr2: [{ name1: 'akash', name2: 'girish' }, { name1: 'riya', name2: 'priya' }]
            }
        }
    }
    render() {
        return (
            <div>
                {this.state.arr2.map((obj,i)=>{
                    return(
                        <div>
                        {obj.name1}-{obj.name2}
                        </div>
                    )
                })}
            </div>
        )
    }

}