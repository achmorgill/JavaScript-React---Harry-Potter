import React from 'react';


class HarryPotterSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: undefined
    }
  }


  handleChange(event) {
    const newIndex = event.target.value 
    this.setState({ selectedIndex: newIndex})
    
    const selectCharacter =this.props.characters[newIndex]
    this.props.selectCharacter( selectCharacter )
  }

  render() {

    console.log(this.state)

    const options = this.props.characters.map((character, index) => {
      console.log("characters",character)
      return <option value={index} key={index}>{character.actor}</option>
    })
  
  return (
    <select id="characters" value={this.state.selectedIndex} onChange={this.handleChange.bind(
    this)}>
      {options}
    </select>
    
    )


}




}

export default HarryPotterSelector;