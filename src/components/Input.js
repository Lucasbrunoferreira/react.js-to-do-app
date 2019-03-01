import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholderText: '+'
    }

    this.handleInput = this.handleInput.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  handleInput (e) {
    this.setState({ placeholderText: 'Press Enter to add new task' })

    if (e.key === 'Enter') {
      this.props.textValue(e.target.value)
    }
  }

  clearInput (e) {
    e.target.value = ''
    this.setState({ placeholderText: '+' })
  }

  render() {
    return (
      <div className="input-wrapper">
        <input
          placeholder={ this.state.placeholderText }
          onClick={ this.handleInput }
          onBlur={ this.clearInput }
          onKeyPress={ this.handleInput }
        />
      </div>
    )
  }
}

Input.propTypes = {
  textValue: PropTypes.func,
};