import React, { Component } from 'react'
import Input from '../components/Input'
import TodoList from '../components/TodoList'
import ReactLogo from '../assets/icons/favicon.ico'
export default class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      todoList: []
    }

    this.handleInputText = this.handleInputText.bind(this)
    this.deleteItemFromId = this.deleteItemFromId.bind(this)
  }

  handleInputText (value) {
    let newItem = {
      id: Math.random().toString(36).substr(2, 9),
      description: value,
      done: false
    }

    this.setState({ todoList: [...this.state.todoList, newItem] })
  }

  deleteItemFromId (id) {
    this.setState(({ todoList }) => ({
      todoList: todoList.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div className="home">
        <TodoList value={ this.state.todoList } deleteItem={ (id) => this.deleteItemFromId(id) } />

        <Input textValue={ this.handleInputText } />

        <div className="info-me">
          <span>Developed with</span>

          <img src={ReactLogo} alt="react-logo" />

          <span>by</span>

          <a href="https://github.com/Lucasbrunoferreira">@lucasbrunoferreira</a>
        </div>
      </div>
    )
  }
}
