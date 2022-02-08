import React from "react";

export default function TodoItem({todo, onItemClick}){
    return (
        <button className="todo-item" onClick={() => onItemClick(todo.id)}>
            {todo.name}
        </button>
    )
}