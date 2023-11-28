import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    const {searhTerm, onSearch, children } = this.props;
    return (
      <div>
        <form action="">
        <label htmlFor="">
            {children}:
          <input type="text" value={searhTerm} onChange={onSearch} />
        </label>
        </form>
      </div>
    )
  }
}
a