import React from 'react';
import TodoItem from '../interfaces/TodoItem';

export default function TodoItemView(props: {
    todo: TodoItem;
    toggle: (id: string) => undefined;
}) {

    const { id, name, completed }: TodoItem = props.todo;

    return (
        <li className="list-group-item">
            <input type="checkbox" onChange={(param) => props.toggle(id)} checked={completed}></input>
            <span>{name}</span>
        </li>
    );
}