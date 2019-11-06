import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DataContainer from './Containers/DataContainer'
import FilterContainer from './Containers/FilterContainer'
import GraphContainer from './Containers/GraphContainer'

class App extends Component {

  state = {
    levelCounter: 1,
    champObj: [],
    itemObjs: [],
    chartdata: {
      labels: ["HP", "MP", "Attack Damage", "Attack Range", "Armor","Spellblock", "Movespeed"],
      datasets: [{
        label: "Stats",
        data: []
      }]
    }
  }

applyItem = (itemObj) => {
  let currentChamp = this.state.champObj
  console.log(currentChamp.attackdamage)
  console.log(itemObj)
  this.setState({
    chartdata:{
    labels: ["HP", "MP", "Attack Damage", "Attack Range", "Armor","Spellblock", "Movespeed"],
    datasets:[{
      label: "Stats",
      data: [
        currentChamp.hp += itemObj.flatHPPoolMod,
        currentChamp.mp += itemObj.flatMPPoolMod,
        currentChamp.attackdamage += itemObj.flatPhysicalDamageMod,
        currentChamp.attackrange,
        currentChamp.armor += itemObj.flatArmorMod,
        currentChamp.spellblock += itemObj.flatSpellBlockMod,
        currentChamp.movespeed += itemObj.flatMovementSpeedMod
      ]
    }]}
  })

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
      fetch("http://localhost:3000/items")
      .then(r => r.json())
      .then(itemsArr => {
        // console.log(championsArr)
        this.setState({
          itemObjs: itemsArr
        })
      })
  }

  levelUp = (itemObj) => {
    if(this.state.levelCounter < 18){
    let currentChamp = this.state.champObj
    this.setState({
      levelCounter: this.state.levelCounter + 1,
      chartdata:{
      labels: ["HP", "Attack Damage", "Armor","Spellblock", "MP"],

      datasets:[{
        label: "Stats",
        data: [
          currentChamp.hp += itemObj.hpperlevel,
          currentChamp.attackdamage += itemObj.attackdamageperlevel,
          currentChamp.armor += itemObj.armorperlevel,
          currentChamp.spellblock += itemObj.spellblockperlevel,
          currentChamp.mp += itemObj.mpperlevel
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
      < FilterContainer selectChamp = {this.selectChamp} champObj = {this.state.champObj} applyItem = {this.applyItem} itemObjs = {this.state.itemObjs}/>
      </div>

    </div>
  );
  }
}

export default App;
