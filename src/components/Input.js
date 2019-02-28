import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholderText: '+',
      text: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.setInputValue = this.setInputValue.bind(this)
  }

  setInputValue(e) {
    this.setState({ text: e.target.value })
  }

  handleInput (e) {
    this.setState({ placeholderText: 'Add new task' })

    if (e.key === 'Enter') {
      console.log('add')
    }
  }

  clearInput () {
    this.setState({ text: '', placeholderText: '+' })
  }

  render() {
    return (
      <div className="input-wrapper">
        <input placeholder={ this.state.placeholderText } value={ this.state.text } onChange={ this.setInputValue } onClick={ this.handleInput } onBlur={ this.clearInput } onKeyPress={ (e) => { this.handleInput(e) } } />
      </div>
    )
  }
}
