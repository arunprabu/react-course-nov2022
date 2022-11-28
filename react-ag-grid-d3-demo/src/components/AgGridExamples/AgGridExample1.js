import { AgGridReact } from 'ag-grid-react'
import React, { useMemo, useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgGridExample1 = () => {

  const [columns] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'year' }
  ]);
  const defaultColDefs = useMemo( () => {
    return {
      sortable: true
    }
  }, []);

  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Innova Hycross', year: 2022 },
    { make: 'Hyundai', model: 'Verna', year: 2021 },
    { make: 'BMW', model: 'i8', year: 2014 },
    { make: 'Tesla', model: 'Model X', year: 2015 }
  ]);

  return (
    <div>
      <h2>Ag Grid Example - Basic Version</h2>

      <div className='ag-theme-alpine' style={{height: 250, width: 500}}>
        <AgGridReact 
          columnDefs={columns}
          rowData={rowData}
          defaultColDef={defaultColDefs} // when you want to have same settings for all cols
          animateRows='true'
          rowSelection='multiple' // multiple rows can be selected in grid
          >
          </AgGridReact>
      </div>
    </div>
  )
}

export default AgGridExample1