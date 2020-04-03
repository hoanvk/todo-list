import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {  
  
  render() {
    var {todoItem, onItemClick } = this.props;
    var {id, title, isCompleted} = todoItem;
    return (
      <div className="view">
        <input itemID={id} className="toggle" type="checkbox" checked={isCompleted} onChange={()=>onItemClick(id)}></input>
        <label onClick={()=>onItemClick(id)}>{title}</label>
             
      </div>
    );
  }
  
}
TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }),  
  onItemClick: PropTypes.func.isRequired
}
export default TodoItem;
