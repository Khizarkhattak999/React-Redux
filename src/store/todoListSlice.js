const initialState = {
    todos: [
      { id: 1, title: "Todo1", completed: false },
      { id: 2, title: "Todo2", completed: false },
      { id: 3, title: "Todo3", completed: false },
    ],
  };
  
  const TodoListReducer = (state = initialState, action) => {
    if (action.type === "savetodo") {
  
      const newtodo = {
        id: Date.now(),
        title: action.title,
        completed: false,
      };
  
      return {
        todos: state.todos.push(newtodo),
    }
  
    }
  
    if (action.type === "togglecomplete") {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index].completed = action.payload;
    }
  
    if (action.type === "deletebtn") {
      return state.filter((todo) => todo.id !== action.payload);
    }
  };
  
  export default TodoListReducer;
  