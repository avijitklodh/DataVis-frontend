import React, { Component } from 'react';
import TypesOfGraphs from '../Components/TypesOfGraphs';
import GraphShowComponent from '../Components/GraphShowComponent'
import Description from '../Components/Description'

class GraphContainer extends Component {

  render() {
    return (
      <div className = "TypeShowDesc">
        <TypesOfGraphs clickhandler = {this.props.clickhandler} linekhandler = {this.props.linekhandler} barhandler = {this.props.barhandler} piehandler = {this.props.piehandler} radarhandler = {this.props.radarhandler} doughnuthandler = {this.props.doughnuthandler} polarkhandler = {this.props.polarkhandler} />
        <GraphShowComponent champObj = {this.props.champObj} chartdata = {this.props.chartdata} CurrentGraphType = {this.props.CurrentGraphType} levelUp = {this.props.levelUp}/>
        <Description champObj = {this.props.champObj}/>
      </div>
    );
  }

}

export default GraphContainer;
