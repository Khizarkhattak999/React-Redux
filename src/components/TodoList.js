import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <>
    <div className="wrapper">
      <div className="listt">
        <ul className="list">
          {todos.map((item) => (
            <li key={item.id}>
              <TodoItem
                id={item.id}
                title={item.title}
                completed={item.completed}
              />
            </li>
          ))}
          {todos.length === 0 && <h1>Your TODO List is empty.</h1>}
        </ul>
      </div>
    </div>
    </>
  );
};

export default TodoList;
