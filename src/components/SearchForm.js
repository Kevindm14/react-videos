import React, { Component } from 'react';

export default class SearchForm extends Component {
  formSubmit = e => {
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input type="text" onChange={this.props.query} />
        <input type="submit" onClick={this.props.search}/>
      </form>
    )
  }
}