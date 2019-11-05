import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DataContainer from './Containers/DataContainer'
import FilterContainer from './Containers/FilterContainer'
import GraphContainer from './Containers/GraphContainer'

class App extends Component {

  state = {
    levelCounter: 1,
    champObj: {},
    chartdata: {
      labels: ["HP", "MP", "Attack Damage", "Attack Range", "Armor","Spellblock", "Movespeed"],
      datasets: [{
        label: "Stats",
        data: []
      }]
    }
  }

selectChamp = (champObj) => {

    this.setState({
      levelCounter: 1,
      champObj: champObj,
      chartdata:{
      labels: ["HP", "MP", "Attack Damage", "Attack Range", "Armor","Spellblock", "Movespeed"],
      datasets:[{
        label: "Stats",
        data: [
          champObj.hp,
          champObj.mp,
          champObj.attackdamage,
          champObj.attackrange,
          champObj.armor,
          champObj.spellblock,
          champObj.movespeed


        ]
      }]}})
  }

  levelUp = () => {
    if(this.state.levelCounter < 18){
    let currentChamp = this.state.champObj
    this.setState({
      levelCounter: this.state.levelCounter + 1,
      chartdata:{
      labels: ["HP", "Attack Damage", "Armor","Spellblock", "MP"],

      datasets:[{
        label: "Stats",
        data: [
          currentChamp.hp += currentChamp.hpperlevel,
          currentChamp.attackdamage += currentChamp.attackdamageperlevel,
          currentChamp.armor += currentChamp.armorperlevel,
          currentChamp.spellblock += currentChamp.spellblockperlevel,
          currentChamp.mp += currentChamp.mpperlevel
        ]
      }]}})
    }
    console.log(this.state.champObj)
  }

render(){
  return (
    <div className="App" >

      <div className="Data" >
      < DataContainer />
      </div>

      <div className="Graph">
      < GraphContainer chartdata = {this.state.chartdata} levelUp = {this.levelUp}/>
      </div>

      <div className="Filter">
      < FilterContainer selectChamp = {this.selectChamp} champObj = {this.state.champObj}/>
      </div>

    </div>
  );
  }
}

export default App;
