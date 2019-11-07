import React, { Component } from 'react';
import { Bar, Line, Pie, Radar, Polar, Doughnut } from 'react-chartjs-2';

class GraphShowComponent extends Component {



  whatRenders = () => {
    // console.log(this.props.CurrentGraphType)
  let  graphType = this.props.CurrentGraphType
      switch(graphType){
        case "Line":
      return (<Line
     data={this.props.chartdata}
     width={300}
     height={300}
     options={{ maintainAspectRatio: true }}
    />)
      case "Bar":
    return(<Bar
     data={this.props.chartdata}
     width={300}
     height={300}
     options={{ maintainAspectRatio: true }}
    />)
      case "Pie":
    return (<Pie
     data={this.props.chartdata}
     width={300}
     height={300}
     options={{ maintainAspectRatio: true }}
    />)
      case "Radar":
      return(
    <Radar
     data={this.props.chartdata}
     width={300}
     height={300}
     options={{ maintainAspectRatio: true }}
    />)
    case "Doughnut":
    return(
    <Doughnut
     data={this.props.chartdata}
     width={300}
     height={300}
     options={{ maintainAspectRatio: true }}
    />)
    case "Polar":
    return(
    <Polar
     data={this.props.chartdata}
     width={300}
     height={300}
     options={{ maintainAspectRatio: true }}
    />)
    break;
    default:
    return(
    <Line
   data={this.props.chartdata}
   width={300}
   height={300}
   options={{ maintainAspectRatio: true }}
   />);
  }
  }

  render() {
    return (
      <div className = "graphShow">
          {this.whatRenders()}
          <button onClick = {this.props.levelUp}>Level up!</button>
      </div>
    );
  }

}

export default GraphShowComponent;
