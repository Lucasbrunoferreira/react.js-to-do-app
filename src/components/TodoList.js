import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-list-wrapper">
        <h1>To do List</h1>

        <ul className="todo-list">
          {
            this.props.value.map((todo) => {
              return <TodoItem key={todo.id} item={todo} delete={ () => this.props.deleteItem(todo.id) } />
            })
          }
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  value: PropTypes.array,
  deleteItem: PropTypes.func
};
