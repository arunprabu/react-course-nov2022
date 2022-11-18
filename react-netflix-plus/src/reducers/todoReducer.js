// Reducer?
// function that should take in two args (state, action) 
// and it must return state 

const todoReducer = (state = [], action) => {
  // action is an obj 
  // it can have two properties 
  // action.type is must
  // action.payload is optional
  
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ];
    
    case 'LIST_TODOS':
      return state;

    case 'EDIT_TODO':
      return state;

    case 'DELETE_TODO':
      return state;
    
    default:
      return state;
  }

}

export default todoReducer;
