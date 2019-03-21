

import React, { Component } from 'react'
const SpiralContext = React.createContext();

export class SpiralProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            spiral : {
                "name": "this is spiral provider content"
            }
        }
    }
  render() {
    return (
      <SpiralContext.Provider value={this.state}>
        {this.props.children}
      </SpiralContext.Provider >
    )
  }
}

export const SpiralConsumer = SpiralContext.Consumer 
