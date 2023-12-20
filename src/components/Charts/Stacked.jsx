import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

function Stacked({ width, height }) {
    return (
        <ChartComponent width={width} height={height} primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} id='charts' chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{background:'white'}}>
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, i) => <SeriesDirective key={i} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Stacked
