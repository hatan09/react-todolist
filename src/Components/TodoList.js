import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({list, onItemClick}){
    return (
        <div className="todo-list">
            {list.map(item => <TodoItem key={item.id} todo={item} onItemClick={onItemClick}/>)}
        </div>
    )
}