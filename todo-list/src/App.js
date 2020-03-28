import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
var classNames = require('classnames');
class App extends React.Component {
  constructor(){
    super();
    this.todoItems = [
      // { title: "Di tap the duc", isCompleted: true },
      // { title: "Di an sang", isCompleted: false },
      // { title: "Ngoi lam viec", isCompleted: false }
    ];
  }
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input className="new-todo" placeholder="Ban muon lam cai gi?" />
        </header>        
        {        
          this.todoItems.length > 0 && 
          <section className="main">
            <input id="toggle-all" className="toggle-all"></input>
            <label for="toggle-all"></label>
            <ul className="todo-list">
              {
                this.todoItems.map((item, index) => 
                  <li className={classNames({ completed: item.isCompleted })}>
                    <TodoItem key={index} title={item.title} ></TodoItem>
                  </li>
                )
              }        
            </ul>
          </section>
        }
        {
          this.todoItems.length > 0 && 
          <footer className="footer"></footer>
        }        
        
      </section>
      
    );
  }
  
}

export default App;
