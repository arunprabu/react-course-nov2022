import { AgGridReact } from 'ag-grid-react'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgGridExample2 = () => {

  const carMake = useRef();
  const carModel = useRef();
  const carPrice = useRef();

  const [columns] = useState([
    { field: 'make', rowDrag: true},
    { field: 'model' },
    { field: 'price' }
  ]);
  const defaultColDefs = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      resizable: true
    }
  }, []);

  const [rowData, setRowData] = useState([{}, {}]);

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
  
  const handleAddCar = (event) => {
    event.preventDefault();
    console.log(carMake.current.value);
    console.log(carModel.current.value);
    console.log(carPrice.current.value);

    const newCarData = {
      make: carMake.current.value,
      model: carModel.current.value,
      price: carPrice.current.value
    }
    // changing state immutably
    setRowData([
      ...rowData,
      newCarData
    ]);

  }

  return (
    <div>
      <h2>Ag Grid Example - Advanced Version with REST API Call. Adding Data, Filter</h2>

      <form onSubmit={handleAddCar}>
        <div>
          <label>Enter Car Make</label>
          <input type='text' placeholder='Enter Car Make' 
            ref={carMake}/>
        </div>
        <div>
          <label>Enter Car Model</label>
          <input type='text' placeholder='Enter Car Model' 
            ref={carModel} />
        </div>
        <div>
          <label>Enter Price of Car</label>
          <input type='text' placeholder='Enter Car Price' 
           ref={carPrice}/>
        </div>
        <button type="submit">Add Car</button>
      </form>

      <div className='ag-theme-alpine' style={{ height: 250, width: 620 }}>
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          defaultColDef={defaultColDefs} // when you want to have same settings for all cols
          animateRows='true'
          rowSelection='multiple' // multiple rows can be selected in grid
          rowDragManaged='true'
        >
        </AgGridReact>



      </div>
    </div>
  )
}

export default AgGridExample2