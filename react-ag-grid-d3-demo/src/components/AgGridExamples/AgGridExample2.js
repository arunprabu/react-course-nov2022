import { AgGridReact } from 'ag-grid-react'
import React, { useEffect, useMemo, useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgGridExample2 = () => {

  const [columns] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ]);
  const defaultColDefs = useMemo(() => {
    return {
      sortable: true
    }
  }, []);

  const [rowData, setRowData] = useState([]);

  // Hit the REST API - https://www.ag-grid.com/example-assets/row-data.json

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        console.log(resInJson);
        setRowData(resInJson);
      })
  }, [])
  

  return (
    <div>
      <h2>Ag Grid Example - Advanced Version with REST API Call. Adding Data, Filter</h2>

      <div className='ag-theme-alpine' style={{ height: 250, width: 500 }}>
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

export default AgGridExample2