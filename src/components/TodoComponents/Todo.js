import React from "react";
import './Todo.css';

class ToDo extends React.Component{// make class base component from scratch 
    constructor(props){// pass props down 
        super(props);
    }
    render(){
    console.log(this.props.todo);
       return(
           // todo component renders the contents of the todo
           // Ternary operator that checks the condition of the task being completed or not with the todo.id as an argument
          <div 
               onClick={()=> this.props.toggleFinished(this.props.todo.id)}
               className={this.props.todo.completed ? "completed-task" : "" }> 
              {this.props.todo.task}  
          </div>
       );
    }
}

export default ToDo;