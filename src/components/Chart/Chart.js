import React from 'react';
import ChartBar from "./ChartBar/ChartBar";
import './Chart.css'

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value );
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => {
                    return <ChartBar
                        label={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMax}
                        key={dataPoint.label}/>
                })
            }
        </div>

    )
}

export default Chart;
