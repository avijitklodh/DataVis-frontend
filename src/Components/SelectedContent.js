import React, { Component } from 'react';

class SelectedContent extends Component {

  whichImageToRender = () => {
    if (this.props.champObj.image_art !== undefined){
          console.log(this.props.champObj.image.slice(0, -4))
      return (<img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.props.champObj.image.slice(0, -4)}_0.jpg`}/>)
    }
  //   else{ return "No image to render"}
  }

  render() {
    return (
      <div>
        {this.whichImageToRender()}
      </div>
    );
  }

}

export default SelectedContent;
