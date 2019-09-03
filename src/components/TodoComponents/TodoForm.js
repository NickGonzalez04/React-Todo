import React from "react";

// props is passed down in the onChange and then rendered over in App.js

const InputForm = props => {
   
    return (
        <form onSubmit={event => {event.preventDefault();}}>
          <div>
            <input type="text" placeholder="To Do Task Here" onChange={props.propsMessage} /> 
            <button onClickCapture={props.propsSave}>Submit To Do Item</button>
            <button>Clear Completed To Do Item</button>
          </div>
        </form>
    );
} 

export default InputForm;