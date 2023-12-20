import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

function Area() {
    const { currentMode } = useStateContext()
    return (
        <div className='m-4 md:m-10 mt-32 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category='Area' title='Inflation Rate in Percentage' />
            <ChartComponent id='line-chart' height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: '0' }} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373e' : '#fff'}>
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item, i) => <SeriesDirective key={i} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Area