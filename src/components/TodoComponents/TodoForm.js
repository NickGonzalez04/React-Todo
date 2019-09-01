import React from "react";


// handleChangeInput = event => {
//     this.setState({todoTask: event.target.value});
// };


const TextInput = props => {
   
    return (
        <div>
        <input type="text" placeholder="To Do Task Here" onChange={props.propsMessage} />
        <button>Add To Do</button>
        <button>Clear Completed</button>
        </div>
    );
} 

export default TextInput;