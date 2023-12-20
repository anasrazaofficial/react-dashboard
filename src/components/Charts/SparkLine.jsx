import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'
function SparkLine({ currentColor, id, type, height, width, data, color }) {
    return (
        <SparklineComponent id={id} height={height} width={width} dataSource={data} xName='xval' yName='yval' fill={color} border={{ color: currentColor, width: 2 }} tooltipSettings={{
            visible: true,
            format: '${x} : data ${y}',
            trackLineSettings: { visible: true }
        }}>
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    )
}

export default SparkLine