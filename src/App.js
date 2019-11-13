import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dataset from './Components/Dataset'
import FilterContainer from './Containers/FilterContainer'
import GraphContainer from './Containers/GraphContainer'
import CustomGraphContainer from './Containers/CustomGraphContainer'

class App extends Component {

  state = {
    CurrentGraphType: "Bar",
    sample: true,
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

  clickhandler = (event) => {
    this.setState({
      CurrentGraphType: event.target.innerHTML
    })
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
  console.log(champObj)
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

  levelUp = (selectedChamp) => {
    if(this.state.levelCounter < 18){
    let selectedChamp = this.state.champObj
    this.setState({
      levelCounter: this.state.levelCounter + 1,
      chartdata:{
      labels: ["HP", "MP", "Attack Damage", "Attack Range", "Armor","Spellblock", "Movespeed"],

      datasets:[{
        label: "Stats",
        data: [
          selectedChamp.hp += selectedChamp.hpperlevel,
          selectedChamp.mp += selectedChamp.mpperlevel,
          selectedChamp.attackdamage += selectedChamp.attackdamageperlevel,
          selectedChamp.attackrange,
          selectedChamp.armor += selectedChamp.armorperlevel,
          selectedChamp.spellblock += selectedChamp.spellblockperlevel,
          selectedChamp.movespeed
        ]
      }]}})
    }
  }

  sampleOrCustom = () => {
    if (this.state.sample === true) {
      return(
        <>
        <div className="Graph">
      < GraphContainer chartdata = {this.state.chartdata} levelUp = {this.levelUp} champObj = {this.state.champObj} CurrentGraphType = {this.state.CurrentGraphType} clickhandler = {this.clickhandler}/>
      </div>

      <div className="Filter">
      < FilterContainer selectChamp = {this.selectChamp} champObj = {this.state.champObj} applyItem = {this.applyItem} itemObjs = {this.state.itemObjs}/>
      </div>
      </>
    )
    }
    return(
      <div className="Graph" >
        < CustomGraphContainer clickhandler = {this.clickhandler} CurrentGraphType = {this.state.CurrentGraphType}/>
      </div>
    )
  }

  changeRender = () => {
    this.setState({
      sample: this.state.sample ? false : true
    })
  }

render(){
  return (
    <div className="App" >

      <div className="Data" >
      < Dataset changeRender = {this.changeRender} sample = {this.state.sample}/>
      </div>
      {this.sampleOrCustom()}
    </div>
  );
  }
}

export default App;
