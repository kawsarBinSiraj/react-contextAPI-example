
import React from 'react'
import { SpiralConsumer } from './Spiral'
import { MainConsumer } from './MainProvider'


export default function SpiralConent(porps) {
    return (
        <p style={porps.style}>
            <SpiralConsumer>
                {SpiralContext => {
                    return (
                        <React.Fragment>
                            <span style={{display : 'inline-block',marginRight:'10px'}}>{SpiralContext.spiral.name}</span>
                        </React.Fragment>
                    )
                }}
            </SpiralConsumer>
            <MainConsumer>
                {MainConsumerContext => {
                    return (
                        <React.Fragment>
                           <span style={{display : 'inline-block'}} className="text-primary">and this is main provider {MainConsumerContext.main.spiraldemo}</span>
                        </React.Fragment>
                    )
                }}
            </MainConsumer>
        </p>
    )
}
