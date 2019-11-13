import React, { Component } from 'react';
import TypesOfGraphs from '../Components/TypesOfGraphs';
import GraphShowComponent from '../Components/GraphShowComponent'
import Description from '../Components/Description'

class GraphContainer extends Component {

  render() {
    return (
      <div>
        <div>
        <TypesOfGraphs clickhandler = {this.props.clickhandler}/>
        <GraphShowComponent champObj = {this.props.champObj} chartdata = {this.props.chartdata} CurrentGraphType = {this.props.CurrentGraphType} levelUp = {this.props.levelUp}/>
        <Description champObj = {this.props.champObj}/>
        </div>
      </div>
    );
  }

}

export default GraphContainer;
