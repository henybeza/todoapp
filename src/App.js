import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Header from './Components/Layout/Header.js';
import AddTodo from './Components/AddTodo.js';
import Todos from './Components/Todos/Todos.js';
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
//import uuid from 'uuid';
import axios from 'axios'

import './App.css';



class App extends React.Component{
  state = {
    todos:[ ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}));
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //Delete Todo

  delTodo = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then ( res => this.setState({todos: [...this.state.todos.filter(todo =>todo.id !==id)]}));
    
  }

  //Add Todo

  addTodo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false

    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}));

  }

  render() {

    return (
      <Router>

      <div className="App" >
        <div className="container"  >
          <Header />

          <Route exact path="/" render={props => (

            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos = {this.state.todos} 
              markComplete = {this.markComplete}
              delTodo = {this.delTodo}/>
            </React.Fragment>

          )}/>

          <Route path="/about"  component = {About}/>
          <Route path="/contact"  component = {Contact}/>
          
        </div> 
      </div>

      </Router>
      
    );
  }
}


export default App;