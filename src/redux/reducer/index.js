import { createStore } from "redux";
import { TodoListReducer } from "./reducer";

const store = createStore(TodoListReducer)

export default store