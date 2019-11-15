import React, { Component } from 'react';
import Champion from './Champion'

class FilterChampion extends Component {

  state = {
    search: ""
  }

  handleChange = (event) => {
    this.setState({
    search: event.target.value
    })
  }

  lowerCaseSearch = () => {
    return this.state.search ? this.state.search.toLowerCase() : ""
  }

  render() {
    let filteredArr = this.props.champObjs.filter(champObj => { return champObj.name.toLowerCase().includes(this.lowerCaseSearch())})

    return (
      <div className = "champFilter">
        <div className = "champSearchBar">
         <h3>Select a Champion!</h3>
         <input onChange={this.handleChange} value={this.state.search}></input>
         </div>
      <br/>
      <div className = "champArray">
        {filteredArr.map(champObj => < Champion champObj = {champObj} selectChamp = {this.props.selectChamp} key = {champObj.api_id}/>)}
      </div>
      </div>
    );
  }

}

export default FilterChampion;
