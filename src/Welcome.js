import React, { Component } from 'react';
import Locations from './Locations.js';
import './Welcome.css';
import Breweries from './Breweries.js';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: '',
      currentBreweries: [],
      locations: [],
    }
  }

  componentDidMount() {
    this.getStates()
  }

  getStates = () => {
    let states = this.props.breweries.reduce((acc, currentBrewery) => {
      if(!acc.includes(currentBrewery.state)) {
        acc.push(currentBrewery.state)
      }
      return acc;
    }, []).sort();
    this.setState({locations: states});
  }

  render() {
    return (
      <div className='welcome-page'>
        <h1 className='welcome-header'>ShakesBeer</h1>
        <Locations location={this.state.locations}
                   filter={this.chooseState}  
                   chooseState={this.props.chooseState}  
        />
      </div>
    );
  }
}

export default Welcome;