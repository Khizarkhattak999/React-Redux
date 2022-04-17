
import ActionType from "../action-type/action-type";
const initialState={
    allTask:[]
}
export const TaskReducer=(state=initialState,{type,payload})=> 
{
    console.log("reducer",payload)
    console.log(type)
    
    switch(type)
    {
        case ActionType.AddTaskList:
            
            return  {...state,allTask:[...state.allTask,payload]};
        default:
            return state;
    }
}



