import React, { useRef, useReducer } from 'react'
import todoReducer from '../../../reducers/todoReducer';

const Todos = () => {
  console.log('Program Started in Todos');
  
  // creating a ref for the input field to capture the entered input in a fn comp
  const todoInput = useRef('');

  // useReducer 
  const [todoState, todoDispatch] = useReducer(todoReducer)
  
  console.log(todoState);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);

    // hit the rest api -- send the above data
    todoDispatch({
      type: 'ADD_TODO',
      payload: {
        id: new Date(),
        text: todoInput.current.value,
        isCompleted: false
      }
    })

  }

  return (
    <>
      <div className='row'>
        <div className="col-auto">
          <input type='text'
            placeholder='Enter todo' 
            className='form-control'
            ref={todoInput}/>
        </div>
        <div className="col-auto">
          <button 
            type="button" 
            className='btn btn-primary' 
            onClick={handleAddTodo}>ADD TODO</button>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-3'>
          <ul className='list-group'>
            {
              todoState?.map((todo) => {
                return (
                  <li className='list-group-item' key={todo.id}>{todo.text}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Todos