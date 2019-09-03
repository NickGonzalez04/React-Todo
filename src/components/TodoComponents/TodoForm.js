import React from "react";

// props is passed down in the onChange and then rendered over in App.js

class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            newTask: ""
        };
    }

      // Event handlers 
          handleChangeInput = event => {
               console.log(event.target.value);
               this.setState({[event.target.name]: event.target.value});
          };

         handleSubmit = event => {
               event.preventDefault();
               this.props.addnewTask(this.state.newTask); // Renders new task that was input onto the todo list
               this.setState({ newTask: ""}); // Clears out the text from the input field
     }
   render(){
    return (
        // onSubmit keeps the page from refreshing
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="newTask" placeholder="To Do Task Here" 
                                              onChange={this.handleChangeInput}
                                              // onChange event that takes in the value when type in the input
                                              value={this.state.newTask}/> 
            <button type="submit">Submit To Do Item</button>
            <button onClick={this.props.filterFinishedTask}>Clear Completed To Do Item</button>
          </div>
        </form>
    );
   }
} 

export default InputForm;