import React, { Component } from 'react';
import Champion from './Champion'

class FilterChampion extends Component {

  state = {
    search: []
  }

  handleChange = (event) => {
    this.setState({
    search: event.target.value
    })
  }

  render() {

    let filteredArr = this.props.champObjs.filter(champObj => { return champObj.name.toLowerCase().includes(this.state.search)})

    return (
      <div className = "champFilter">
        <h3>Select a Champion!</h3>
         <input onChange={this.handleChange} value={this.state.search}></input>
        {filteredArr.map(champObj => < Champion champObj = {champObj} selectChamp = {this.props.selectChamp} key = {champObj.api_id}/>)}
      </div>
    );
  }

}

export default FilterChampion;
