import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoList: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.listItem !== "") {
      let newListItem = {
        description: props.listItem,
        done: false
      }

      let list = [
        ...state.todoList,
        newListItem
      ]

      return state.todoList = list
    } else {
      return {}
    }
  }

  renderTodoList() {
    if (this.state.todoList.length > 0) {
      return (
        this.state.todoList.map((todo, index) => {
          return <TodoItem key={index} item={todo} />
        })
      )
    }
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <h1>To do List</h1>

        <ul className="todo-list">
          { this.renderTodoList() }
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  listItem: PropTypes.string,
};
