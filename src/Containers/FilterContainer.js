import React, { Component } from 'react';
import SelectedContent from '../Components/SelectedContent'
import FilterChampion from '../Components/FilterChampion'
import FilterItem from '../Components/FilterItem'

class FilterContainer extends Component {

  state = {
    champObjs: [],
    itemObjs: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/champions")
    .then(r => r.json())
    .then(championsArr => {
      // console.log(championsArr)
      this.setState({
        champObjs: championsArr
      })
    })
  }

  render() {
    return (
      <div>
        <SelectedContent champObj = {this.props.champObj} />
        <FilterChampion champObjs = {this.state.champObjs} selectChamp = {this.props.selectChamp}/>
        <FilterItem itemObjs = {this.props.itemObjs} applyItem = {this.props.applyItem}/>
      </div>
    );
  }

}

export default FilterContainer;
