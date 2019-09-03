import React from "react";

class ToDo extends React.Component{// make class base component from scratch 
    constructor(props){
        super(props);
    }
    render(){
    console.log(this.props.todo);
       return(
           // todo component renders the contents of the todo
          <div>  
              {this.props.todo.task}  
          </div>
       );
    }
}

export default ToDo;