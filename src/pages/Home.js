import React, { Component } from 'react'
import Input from '../components/Input'
import TodoList from '../components/TodoList'
export default class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      inputValue: ''
    }

    this.handleInputText = this.handleInputText.bind(this)
  }

  handleInputText (value) {
    this.setState({ inputValue: value })
  }

  render() {
    return (
      <div className="home">
        <TodoList listItem={ this.state.inputValue } />

        <Input textValue={ this.handleInputText } />
      </div>
    )
  }
}
