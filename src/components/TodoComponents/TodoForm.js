import React from "react";

// props is passed down in the onChange and then rendered over in App.js

const TextInput = props => {
   
    return (
        <div>
        <input type="text" placeholder="To Do Task Here" onChange={props.propsMessage} /> 
        <button onClick={props.propsMessage}>Submit To Do Item</button>
        <button>Clear Completed To Do Item</button>
        </div>
    );
} 

export default TextInput;