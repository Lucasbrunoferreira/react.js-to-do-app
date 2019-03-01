import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoList: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    let newListItem = {
      description: props.listItem,
      done: false
    }

    let list = [
      ...state.todoList,
      newListItem
    ]

    return state.todoList = list
  }

  renderTodoList() {
    return (
      this.state.todoList.map((todo, index) => {
        return <span key={index}> { todo.description } </span>
      })
    )
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <h1>To do List</h1>

        { this.renderTodoList() }
      </div>
    )
  }
}

TodoList.propTypes = {
  listItem: PropTypes.string,
};
