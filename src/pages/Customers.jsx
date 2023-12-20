import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Toolbar, Sort, Filter, Inject, Edit } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

function Customers() {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header title="Customers" category="Page" />
            <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={['Delete']} width='auto' editSettings={{ allowDeleting: true, allowEditing: true }}>
                <ColumnsDirective>
                    {customersGrid.map((item, i) => <ColumnDirective key={i} {...item} />)}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    )
}

export default Customers
