import React, { Component } from 'react';
import Item from './Item'


class FilterItem extends Component {

  state = {
    search: []
  }

  handleChange = (event) => {
    this.setState({
    search: event.target.value
    })
  }

ifItemsShouldRender = () => {
  // console.log( this.props.itemObjs.length)
  if (this.props.itemObjs.length > 0) {
    console.log("hits here")
    let filteredArr = this.props.itemObjs.filter(itemObj => { return itemObj.name.toLowerCase().includes(this.state.search)})
    return(
      <>
      <h5>Select an Item!</h5>
      <input onChange={this.handleChange} value={this.state.search}></input>
      { filteredArr.map(itemObj => < Item itemObj = {itemObj} key = {itemObj.api_id} applyItem = {this.props.applyItem}/>) }
      </>
    )
  }
}
  render() {
    return (
      <div className = "itemFilter" >
          {this.ifItemsShouldRender()}

      </div>
    );
  }

}

export default FilterItem;
