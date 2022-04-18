
const initialState={
    allTask:[]
}
export const TodoListReducer=(state=initialState, action) => 
{
    
    if(action.type === 'AddToDo')
    {
         return  {
             ...state,
             allTask:[...state.allTask, action.payload]

            };

        }

    if (action.type === 'DeleteToDo') {
        return {
            ...state,
            allTask: state.allTask.filter(todo => todo.id !== action.payload)
        }
    }
        return state;
}



