import { combineReducers } from "redux";
import { TaskReducer } from "./reducer";
const reducers=combineReducers({
    AllTaskList:TaskReducer
})
export default reducers