import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import './style.css'

export default class SearchForm extends Component {
  render() {
    const search = this.props;
    return (
      <div className="main-container">
        <div className="container-icon">
            <SearchIcon />
        </div>
        <InputBase 
          type="text"
          style={{ width: '100%', color: 'white' }}
          placeholder="Search something"
          onChange={search.query}
        />
        <Button color="secondary" onClick={search.search}>Search</Button>
      </div>
    )
  }
}