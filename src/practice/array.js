import React from 'react';
export default class Array extends React.Component{
    constructor(props){
    super(props);
    this.state={
        arr1:['hello','from','silicon']
    }
    }
    // handleChange=(e)=>
    // {
    //     this.setState({
    //         arr1:e.target.value,//it is not going to take array value it will take any type of value
    //         //arr1:['hello','mam']//it will give out put as an[hello,mam]
    //     })
    // }
    handleChange2=()=>
    {
        this.setState({
            arr1:['hello','from','Baripada']//on click it will show this array in the input section
        })
    }
    render(){
        return(
            <div>
                array is= {this.state.arr1} 
                 <br/>
                  <button onClick = {this.handleChange2}>
                     click me
                      </button> {/*why after using button vale cant be given from input (doubt?) */}
            </div>
        )
    }
}