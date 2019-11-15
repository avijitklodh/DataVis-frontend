import React, { Component } from 'react';
import Form from '../Components/Form';
import Graph from '../Components/Graph'
import TypesOfGraphs from '../Components/TypesOfGraphs'
// import './App.css';

class CustomGraphContainer extends Component {

  state = {
        title: "",
        chartdata: {
          labels: [],
          datasets: [{
            label: "",
            fill: false,
            borderColor: "#80b6f4",
            data: [],
            backgroundColor: []
          }]
      }
  }

passdataup = (data) => {
  let dataNameArray = data.datas.map(obj => Object.values(obj)).map(obj => obj[0])
  let dataValueArray = data.datas.map(obj => Object.values(obj)).map(obj => obj[1])
  let randomColorArray = data.datas.map(obj => Object.values(obj)).map(obj => '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
  console.log(dataValueArray)
  this.setState({
    title: data.title,
    chartdata: {
      labels: dataNameArray ,
      datasets: [{
        label: data.label,
        fill: false,
        borderColor: "#80b6f4",
        data: dataValueArray,
        backgroundColor: randomColorArray,

      }]
  }
  })
}

  render(){
  return (
    <>
    <div className = "customGraphType">
    <TypesOfGraphs  linekhandler = {this.props.linekhandler} barhandler = {this.props.barhandler} piehandler = {this.props.piehandler} radarhandler = {this.props.radarhandler} doughnuthandler = {this.props.doughnuthandler} polarkhandler = {this.props.polarkhandler} />
    </div>
    <div className = "customGraphShow">
    < Graph chartdata = {this.state.chartdata} CurrentGraphType = {this.props.CurrentGraphType} title = {this.state.title}/>
    </div>
    <div className="Form">
    < Form passdataup = {this.passdataup}/>
    </div>
    </>
  );
  }
}
export default CustomGraphContainer;
