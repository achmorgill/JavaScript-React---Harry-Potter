import React from 'react'
import HarryPotterSelector from '../components/HarryPotterSelector'
import {HarryPotterDetails} from '../components/HarryPotterDetails'

class HarryPotterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

componentDidMount() {
  const url = 'http://hp-api.herokuapp.com/api/characters'

  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = () => {
    if(request.status !== 200) return

      const jsonString = request.responseText;
    const data = JSON.parse(jsonString);

    this.setState({ characters: data })
    console.log(data)
  }
  request.send()
}

render() {

  return (
    <div>
      <h2>Harry Potter Characters</h2>
     
      <h2>Details</h2>

    </div>
    )
}
}

export default HarryPotterContainer