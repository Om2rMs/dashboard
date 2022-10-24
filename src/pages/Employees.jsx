import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Search,
    Toolbar,
    Inject
} from '@syncfusion/ej2-react-grids';

import {
    employeesData,
    employeesGrid
} from '../data/dummy';
import { Header } from '../components';
const Orders = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10
        bg-white rounded-3xl'>
            <Header category="Page" title="Employees" />
            <GridComponent
                dataSource={employeesData}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                {/* for use services like sort , filter in the column table */}
                <Inject services={[
                    Page, Search, Toolbar]} />
            </GridComponent>
        </div >
    )
}

export default Orders