

import React, { Component } from 'react'
const HeadContext = React.createContext();

export class HeadProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            head : {
                "name": "Father"
            }
        }
    }
  render() {
    return (
      <HeadContext.Provider value={this.state}>
        {this.props.children}
      </HeadContext.Provider >
    )
  }
}

export const HeadConsumer = HeadContext.Consumer 
