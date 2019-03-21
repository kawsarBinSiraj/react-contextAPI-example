

import React, { Component, Fragment } from 'react'
import { MainConsumer } from './MainProvider'
import { HeadProvider, HeadConsumer } from './Head'
import { SpiralProvider} from './Spiral'
import SpiralConent from './SpiralConent'


export default class Children extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: {
                "name": "Children"
            }
        }
    }
    render() {
        return (
            <SpiralProvider>
                <HeadProvider>
                    <div className="container mt-5">
                        <ul className="list-group">
                            <li className="list-group-item active">
                                i'm the : <span className="text-light">{this.state.children.name}</span>
                            </li>
                            <li className="list-group-item">
                                <HeadConsumer>
                                    {HeadContext => {
                                        return (
                                            <Fragment>
                                                <p>My father name is : <span className="text-success">{HeadContext.head.name}</span></p>
                                            </Fragment>
                                        )
                                    }}
                                </HeadConsumer>
                                <MainConsumer>
                                    {MainContext => {
                                        return (
                                            <Fragment>
                                                <p>And my grand father name is : <span className="text-success">{MainContext.main.name}</span> </p>
                                            </Fragment>
                                        )
                                    }}
                                </MainConsumer>
                                <SpiralConent style={spiralStyles}/>
                            </li>
                        </ul>
                    </div>
                </HeadProvider>
            </SpiralProvider>
        )
    }
}

const spiralStyles = {
    color : 'red',
    fontSize : '14px'
}