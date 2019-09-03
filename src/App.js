import React from 'react';
import InputForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todoData =  [
  {
    task: 'Plan out my day',
    id: 1100,
    completed: false
  },
  {
    task: 'Review TK for the next day',
    id: 1101,
    completed: false
  },
  {
    task: 'Work Out',
    id: 1102,
    completed: false
  },
  {
    task: 'Read',
    id: 1103,
    completed: false
  }
]

class App extends React.Component {
  constructor (){
    super();
      this.state={
        todoTask: todoData,
      };
      }
// toggleFinished is function that sets the state and maps over the data with an 'if' statement
toggleFinished = (id) => {
  this.setState({   // setState to mutate the state
    todoTask: this.state.todoTask.map(todo => {
      if (id === todo.id) {
        return {...todo, completed: !todo.completed};
      } else{
        return todo;
      }
    })
  });
}

addnewTask = task => {
  this.setState({
    todoTask: [...this.state.todoTask, {
      task: task,
      id: Date.now(),
      completed: false
    }]
  })
}
    

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  render() {
    console.log(this.state);
    return (
      <div>
           <h2>Welcome to your Personal Todo App!</h2>
              {/* Access the properties of class with the 'this' -- map over the array of data and display it on the page */}
              <TodoList todoTask={this.state.todoTask}
                        toggleFinished={this.toggleFinished}/>
        {/* <ToDoList /> */}
        <InputForm addnewTask={this.addnewTask}
                  />
        
      </div>
    );
  }
}

export default App;
