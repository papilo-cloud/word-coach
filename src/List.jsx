import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {isSearched, onDismiss} = this.props
    // console.log(isSearched)
    return (
      <>
        {
            isSearched().map(list => <li key={list.objectID} >
                <a href={list.url}>{list.title}</a>
                <ul>
                    <li>Author: {list.author}</li>
                    <li>Comments: {list.num_comments}</li>
                    <li>Points: {list.points}</li>
                    <button onClick={() =>onDismiss(list.objectID)} >
                        Dismiss
                    </button>
                </ul>
                
            </li> )
        }
      </>
    )
  }
}
