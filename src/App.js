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
        borderColor: "#80b6f4",
        fill: false,
        data: [],
        backgroundColor: [
          'green',
          'blue',
          'red',
          'purple',
          'brown',
          'aqua',
          'yellow'
        ]
      }]
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/champions")
    .then(r => r.json())
    .then(championsArr => {
      // console.log(championsArr)
      this.setState({
        champObj: championsArr[97]
      })
    })
  }

applyItem = (itemObj) => {
  let currentChamp = this.state.champObj
  this.setState({
    chartdata:{
    labels: ["HP", "MP", "Attack Damage", "Attack Range", "Armor","Spellblock", "Movespeed"],
    datasets:[{
      label: "Stats",
      borderColor: "#80b6f4",
      fill: false,
      data: [
        currentChamp.hp += itemObj.flatHPPoolMod,
        currentChamp.mp += itemObj.flatMPPoolMod,
        currentChamp.attackdamage += itemObj.flatPhysicalDamageMod,
        currentChamp.attackrange,
        currentChamp.armor += itemObj.flatArmorMod,
        currentChamp.spellblock += itemObj.flatSpellBlockMod,
        currentChamp.movespeed += itemObj.flatMovementSpeedMod
      ],
      backgroundColor: [
        'green',
        'blue',
        'red',
        'purple',
        'brown',
        'aqua',
        'yellow'
      ]
    }]}
  })

}

selectChamp = (champObj) => {
  champObj.image.slice(0,-4)
  console.log(champObj)
    this.setState({
      levelCounter: 1,
      champObj: champObj,
      chartdata:{
      labels: ["HP", "MP", "Attack Damage", "Attack Range", "Armor","Spellblock", "Movespeed"],
      datasets:[{
        label: "Stats",
        borderColor: "#80b6f4",
        fill: false,
        data: [
          champObj.hp,
          champObj.mp,
          champObj.attackdamage,
          champObj.attackrange,
          champObj.armor,
          champObj.spellblock,
          champObj.movespeed
        ],
        backgroundColor: [
          'green',
          'blue',
          'red',
          'purple',
          'brown',
          'aqua',
          'yellow'
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
        borderColor: "#80b6f4",
        fill: false,
        data: [
          selectedChamp.hp += selectedChamp.hpperlevel,
          selectedChamp.mp += selectedChamp.mpperlevel,
          selectedChamp.attackdamage += selectedChamp.attackdamageperlevel,
          selectedChamp.attackrange,
          selectedChamp.armor += selectedChamp.armorperlevel,
          selectedChamp.spellblock += selectedChamp.spellblockperlevel,
          selectedChamp.movespeed
        ],
        backgroundColor: [
          'green',
          'blue',
          'red',
          'purple',
          'brown',
          'aqua',
          'yellow'
        ]
      }]}})
    }
  }

  sampleOrCustom = () => {
    if (this.state.sample === true) {
      return(
        <>

        <div className="Graph">
      < GraphContainer chartdata = {this.state.chartdata} levelUp = {this.levelUp} champObj = {this.state.champObj} CurrentGraphType = {this.state.CurrentGraphType}  linekhandler = {this.linekhandler} barhandler = {this.barhandler} piehandler = {this.piehandler} radarhandler = {this.radarhandler} doughnuthandler = {this.doughnuthandler} polarkhandler = {this.polarkhandler} />
      </div>

      <div className="Filter">
      < FilterContainer selectChamp = {this.selectChamp} champObj = {this.state.champObj} applyItem = {this.applyItem} itemObjs = {this.state.itemObjs}/>
      </div>

      </>
    )
    }
    return(

        < CustomGraphContainer linekhandler = {this.linekhandler} barhandler = {this.barhandler} piehandler = {this.piehandler} radarhandler = {this.radarhandler} doughnuthandler = {this.doughnuthandler} polarkhandler = {this.polarkhandler}   CurrentGraphType = {this.state.CurrentGraphType}/>

    )
  }

  changeRender = () => {
    this.setState({
      sample: this.state.sample ? false : true
    })
  }

linekhandler = () => {
  console.log("hits")
  this.setState({
    CurrentGraphType: "Line"
  })
}
barhandler = () => {
  this.setState({
    CurrentGraphType: "Bar"
  })
}
piehandler = () => {
  this.setState({
    CurrentGraphType: "Pie"
  })
}
radarhandler = () => {
  this.setState({
    CurrentGraphType: "Radar"
  })
}
doughnuthandler = () => {
  this.setState({
    CurrentGraphType: "Doughnut"
  })
}
polarkhandler = () => {
  this.setState({
    CurrentGraphType: "Polar"
  })
}


render(){

var  appStyle = {
    width: "100%",
    height: "800px",
    // backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.state.champObj.name === "Ryze" ? "Ryze" : this.state.champObj.api_id }_0.jpg)`,
    // background: "rgba(255, 249, 192, 0.1)"
  }

  return (
    <div style = {appStyle} className="App" >

      <div className="Data" >
      < Dataset changeRender = {this.changeRender} sample = {this.state.sample}/>
      </div >
      <div className="Everything">
      {this.sampleOrCustom()}
      </div>
    </div>
  );
  }
}

export default App;
