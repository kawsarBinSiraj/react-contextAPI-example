

import React, { Component } from 'react'
const MainContext = React.createContext();

export class MainProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            main : {
                "name": "Grand Father",
                "spiraldemo" : 'spiral demo'
            }
        }
    }
  render() {
    return (
      <MainContext.Provider value={this.state}>
        {this.props.children}
      </MainContext.Provider >
    )
  }
}

export const MainConsumer = MainContext.Consumer 