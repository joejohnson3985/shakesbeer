import React, { Component } from 'react';
import Autocomplete from './Autocomplete.js';
import './WelcomePage.scss';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usStates: this.props.dataset.reduce((acc, brewery) => {
        if(!acc.includes(brewery.state)) {
          acc.push(brewery.state)
        }
        return acc;
      }, [])
    }
  }

  // getUsStates() {
  //   const states = this.props.dataset.reduce((acc, brewery) => {
  //     if(!acc.includes(brewery.state)) {
  //       acc.push(brewery.state)
  //     }
  //     return acc;
  //   }, [])
  //   this.setState({ usStates: states});
  // }
  

  render() {
    return (
      <div className='welcome-page'>
        <h1 className='welcome-header'>ShakesBeer</h1>
        <div className='search-container'>
          <Autocomplete usStates={this.state.usStates}
                        chooseState={this.props.chooseState}
          />
        </div>
      </div>
    );
  }
}

export default WelcomePage;