import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
var classNames = require('classnames');
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newItem: "",
      todoItems: [
        { id: 1, title: "Di tap the duc", isCompleted: true },
        { id: 2, title: "Di an sang", isCompleted: false },
        { id: 3, title: "Ngoi lam viec", isCompleted: false }
      ]
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.onAllClick = this.onAllClick.bind(this);
    this.onItemKeyUp = this.onItemKeyUp.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
    
    this.newItemInput = React.createRef();
  }
  onItemClick(id){
    
    var {todoItems} = this.state;
    var todoItem = todoItems.find( x => x.id === id );
    todoItem.isCompleted = !todoItem.isCompleted;
    this.setState({todoItems: todoItems});
  }
  onAllClick(){
    var checked = this.toggleAll.current.checked;
    
    var {todoItems} = this.state;
    todoItems = todoItems.map(x => {return {id: x.id, title: x.title, isCompleted: checked}})
    this.setState({todoItems: todoItems});
  }
  onItemKeyUp(event){
    
    if(event.keyCode===13){
      var text = this.state.newItem;
      if (!text)
      return;
  
      text = text.trim();
      if (!text)
      return;
      
      var {todoItems} = this.state;
      var id = Math.max(...todoItems.map(x => x.id)) + 1;
      todoItems.push({id: id, title: text, isCompleted: false});
      this.setState({todoItems: todoItems});
      this.setState({newItem: ''})
    }
    
  }
  onItemChange(event){
    var text = event.target.value;
    this.setState({newItem: text})
  }
  componentDidMount(){
    this.newItemInput.current.focus();
  }
  render() {
    var {todoItems, newItem} = this.state;   
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input className="new-todo" 
            placeholder="Ban muon lam cai gi?" 
            value={newItem}
            ref={this.newItemInput}
            onChange={this.onItemChange}
            onKeyUp={this.onItemKeyUp} />
        </header>        
        {   
          todoItems.length > 0 && 
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onClick={()=>this.onAllClick()} />
            <label htmlFor="toggle-all" />
            <ul className="todo-list">
              {
                todoItems.map((item, index) => 
                  <li key={index} className={classNames({ completed: item.isCompleted })}>
                    <TodoItem todoItem={
                        {
                          id: item.id, 
                          title: item.title, 
                          isCompleted: item.isCompleted
                        }
                      } 
                      onItemClick= {this.onItemClick}></TodoItem>
                  </li>
                )
              }        
            </ul>
          </section>
        }
        {
          todoItems.length > 0 && 
          <footer className="footer"></footer>
        }        
        
      </section>
      
    );
  }
  
}

export default App;
