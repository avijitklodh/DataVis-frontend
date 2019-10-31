import React, { Component } from 'react';
import TypesOfGraphs from '../Components/TypesOfGraphs';
import GraphShowComponent from '../Components/GraphShowComponent'
import Description from '../Components/Description'

class GraphContainer extends Component {

  render() {
    return (
      <div>
        <h2>Hello from GraphContainer</h2>
        <div>
        <TypesOfGraphs/>
        <GraphShowComponent/>
        <Description/>
        </div>
      </div>
    );
  }

}

export default GraphContainer;
