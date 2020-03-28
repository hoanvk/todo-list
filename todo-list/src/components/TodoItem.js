import React from 'react';

class TodoItem extends React.Component {  
  render() {
    return (
      <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>{this.props.title}  </label>
             
      </div>
    );
  }
  
}

export default TodoItem;
