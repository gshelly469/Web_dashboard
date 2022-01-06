import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarGraph(){
    console.log('in chart')
    return(
        <div>
            <Bar 
            data={{
                labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            }}
            height={400}
            width={600}
            />
        </div>
    )
}

export default BarGraph