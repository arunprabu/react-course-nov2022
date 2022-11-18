import React from 'react'

const Todos = () => {
  return (
    <>
      <div className='row'>
        <div class="col-auto">
          <input type='text' placeholder='Enter todo' className='form-control'/>
        </div>
        <div class="col-auto">
          <button type="button" className='btn btn-primary'>ADD TODO</button>
        </div>
      </div>

      <div className='row'>
        <div className='col-auto'>
          <ul>
            <li>todo 1</li>
            <li>todo 2</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Todos