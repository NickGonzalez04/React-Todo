import React from 'react';
import TextInput from './components/TodoComponents/TodoForm';



class App extends React.Component {
  constructor (){
    super();
      this.state={
        todoTask: ""
      };
      }
   handleSingleClick = event => {
      console.log(event.target.value);
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
        <TextInput propsMessage={this.handleChangeInput}/>
        <div>{this.state.todoTask}</div>
      </div>
    );
  }
}

export default App;
