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
      
   handleSingleClick = event => {
      console.log(event.target.value);
      this.setState({todoTask: event.target.value});
    }
     handleChangeInput = event => {
       console.log(event.target.value);
        this.setState({todoTask: event.target.value});
    };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  render() {
    console.log(this.state);
    return (
      <div>
           <h2>Welcome to your Personal Todo App!</h2>
              {/* Access the properties of class with the 'this' -- map over the array of data and display it on the page */}
              <TodoList todoTask={this.state.todoTask}/>
        {/* <ToDoList /> */}
        <InputForm propsMessage={this.handleChangeInput}
                  propsSave={this.handleSingleClick}
                  />
        
      </div>
    );
  }
}

export default App;
