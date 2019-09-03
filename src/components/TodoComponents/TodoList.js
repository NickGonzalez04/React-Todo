import React from 'react';
import ToDo from "./Todo";


class TodoList extends React.Component {
    constructor(props){//class receives arguments - props is defined in the scope of the constructor function
      super(props);// Defines this. a default behavior of construction function 
      console.log('TodoList', props);
    }
    render(){
        console.log('TodoList', this.props); // passing props down and rendering it with the 'this' object
        return(
            <div>
                {/* maps over the array and renders a todo component   */}
               {this.props.todoTask.map(todo => <ToDo key={todo.id} 
                                                      todo={todo}
                                                      toggleFinished={this.props.toggleFinished}/>)}
            </div>
        )
    }
};

export default TodoList;