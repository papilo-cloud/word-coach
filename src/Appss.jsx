import React, { Component } from 'react'
import List from './List';
import Search from './Search';

const lists = [
    {
        title: 'Node',
        url: 'https://facebook.github.io/Node/',
        author: 'Abdul Jordan',
        num_comments: 9,
        points: 8,
        objectID: 0,
    },
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Doe Walke',
        num_comments: 9,
        points: 12,
        objectID: 1,
    },
    {
        title: 'Redux',
        url: 'https://facebook.github.io/redux/',
        author: 'Maxwell Nicole',
        num_comments: 4,
        points: 7,
        objectID: 2,
    },
];

// const isSearched = searchTerm => item =>
// item.title.toLowerCase().includes(searchTerm.toLowerCase());

export default class Appss extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         lists,
         searhTerm: ''
      }
      this.onSearch = this.onSearch.bind(this);
      this.onDismiss = this.onDismiss.bind(this)
      this.isSearched = this.isSearched.bind(this)
      
    }
     keys = ['title', 'author']
    isSearched() {
      return this.state.lists.filter(item => this.keys.some(key => item[key].toLowerCase().includes(
        this.state.searhTerm.toLowerCase())))
    }
    onDismiss(id) {
        // console.log(this)
        const updatedList = this.state.lists.filter(list => list.objectID != id)
        this.setState({lists: updatedList})
    }
    onSearch(e) {
      this.setState({searhTerm: e.target.value})
    }
 
  render() {
    // console.log(this.isSearched())
    const {searhTerm, lists} = this.state
    // const {isSearched, onDismiss, onSearch} = this
    return (
      <ul className='app'>
        <Search 
        searhTerm={searhTerm}
        onSearch={this.onSearch} >
          Search
        </Search>
        
        <List 
        isSearched={this.isSearched}
        onDismiss ={this.onDismiss}
         />
      </ul>
    )
  }
}
