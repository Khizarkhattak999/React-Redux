import ActionType from "../action-type/action-type"
export const setTask=(newTask)=>
{
    return ({
        type:ActionType.AddTaskList,
        payload:newTask,
    })
}
