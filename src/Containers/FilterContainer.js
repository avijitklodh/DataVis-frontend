import React, { Component } from 'react';
import SelectedContent from '../Components/SelectedContent'
import FilterChampion from '../Components/FilterChampion'
import FilterItem from '../Components/FilterItem'

class FilterContainer extends Component {

  render() {
    return (
      <div>
        <h2>Hello from FilterContainer</h2>
        <SelectedContent/>
        <FilterChampion/>
        <FilterItem/>
      </div>
    );
  }

}

export default FilterContainer;
