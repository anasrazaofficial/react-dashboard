import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

function LineChart() {
    const { currentMode } = useStateContext()
    return (
        <div>
            <ChartComponent id='line-chart' height='420px' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border: '0' }} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373e' : '#fff'}>
                <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
                <SeriesCollectionDirective>
                    {lineCustomSeries.map((item, i) => <SeriesDirective key={i} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default LineChart