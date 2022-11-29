import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useMemo, useState } from 'react'

import 'ag-grid-enterprise'; // ag grid enterprise license is required

const AgGridExample3 = () => {

  const [rowData, setRowData] = useState([]);

  const [columnDefs] = useState([
    { field: 'athlete', filter: 'agTextColumnFilter'},
    { 
      field: 'age', 
      filter: 'agNumberColumnFilter',
      cellRenderer: (data) => {
        if(data.value > 50){
          return (<b className='redText'>{data.value}</b>)
        }else{
          return data.value
        }
      }
    },
    { field: 'country', filter: 'agTextColumnFilter' },
    { field: 'year', filter: 'agNumberColumnFilter' },
    { field: 'date', width: 120, filter: 'agDateColumnFilter' },
    { field: 'sport' },
    { field: 'gold', width: 90 },
    { field: 'silver', width: 90 },
    { field: 'bronze', width: 90 },
    { field: 'total', width: 90 },
  ])

  const defaultColDef = useMemo( () => {
    return {
      sortable: true,
      filter: true,
      floatingFilter: true
    }
  }, []);

  useEffect( () => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then( (res) => res.json())
      .then((resInJson) => {
        setRowData(resInJson);
      })
  }, [])

  const cellClickedListener = (event) => {
    console.log(event);
  }

  return (
    <div>
      <h1>AgGridExample3</h1>
      <div className='ag-theme-alpine' style={{ height: 400, width: 1250 }}>
        <AgGridReact 
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          onCellClicked={cellClickedListener}
          >
        </AgGridReact>
      </div>
    </div>
  )
}

export default AgGridExample3