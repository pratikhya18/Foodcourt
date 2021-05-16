// import React from 'react';
// export default class Array3 extends React.Component{
//     constructor(props){
//     super(props);
//     this.state={
//         name2:"",
//         arr1:[{name1:'riya',name2:'priya'}]
//     }
//     }
//     // handleChange=(e)=>
//     // {
//     //     this.setState({
//     //         arr1:e.target.value,
//     //     })
//     // }
//     handleChange2=(e)=>
//     {
//         this.setState({
//             arr1:e.target.value
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <input value = { this.state.name2}onChange={this.handleChange2(e)} />
//                  {/* result= <button onClick = {this.handleChange2}>
//                      click me
//                       </button>  */}
//             </div>
//         )
//     }
// }

import React from 'react';
import { render } from 'react-dom';
export default class Array2 extends React.Component {
    constructor(props) {
        super(props);
        {
            this.state = {
                name:"",
                arr2: []
            }
        }
    }
    render() {
        return (
            <div>
                <input value ={this.state.name}
             />
             <button onClick = {()=>{
                 var arr=this.state.arr2
                 arr.push({name:this.state.name,id:1})
             }}>
                 click here
             </button>
             {this.state.arr2.map((obj1)=>(
                 <span>
                    { obj1.name}
                 </span>
             )
             )}
            </div>
        )
    }

}