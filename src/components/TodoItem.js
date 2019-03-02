import React, { Component } from 'react'
import PropTypes from 'prop-types';
import IconDone from '../assets/icons/done.svg';
import IconDelete from '../assets/icons/delete.svg';

export default class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: {
        description: ''
      }
    }

    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleItemStatus = this.handleItemStatus.bind(this)
  }

  componentDidMount () {
    this.setState({ item: this.props.item })
  }

  handleInputValue (e) {
    let newItem = {
      ...this.state.item,
      description: e.target.value,
    }

    this.setState({ item: newItem })
  }

  handleItemStatus () {
    let status = !this.state.item.done

    this.setState({ item: { ...this.state.item, done: status } })
  }

  renderDeleteButton() {
    if (!this.state.item.done) {
      return (
        <button onClick={this.handleItemStatus}>
          <img src={IconDone} alt="done" />
        </button>
      )
    } else {
      return ( <span>done</span> )
    }
  }

  render() {
    return (
      <li className="todo-item">
        <input
          className={ this.state.item.done ? 'done' : '' }
          disabled={ this.state.item.done }
          maxLength={40}
          minLength={1}
          value={this.state.item.description}
          onChange={this.handleInputValue}
        />

        { this.renderDeleteButton() }

        <button onClick={ this.props.delete }>
          <img src={IconDelete} alt="delete" />
        </button>
      </li>
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.object,
};
