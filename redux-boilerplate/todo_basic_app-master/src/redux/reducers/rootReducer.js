const initialState = {
  todoList: [],
}

const rootReducer = (state=initialState, action ) => {
  const {type, payload} = action

  switch(type) {
    case "ADD_TODO": 
    return {
      todoList: [...state.todoList, payload]
    }
    case "DELETE_TODO": break;
    case "EDIT_TODO": break;
    default: return state
  }
}

export default rootReducer