import React from 'react';
import TextInput from './components/TodoComponents/TodoForm';

const ToDo = [
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
];

class App extends React.Component {
  constructor (){
    super();
      this.state={
        todoTask: ""
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
    return (
      <div>
        <h2>Welcome to your Personal Todo App!</h2>
        <TextInput 
                  propsMessage={this.handleSingleClick}
                  />
        <div>{this.state.todoTask}</div>
      </div>
    );
  }
}

export default App;
