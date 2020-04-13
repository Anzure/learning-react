import React from 'react';
import TodoItem from '../interfaces/TodoItem';

export default function TodoItemView(props: {
    todo: TodoItem;
    toggle: (id: string) => undefined;
}) {

    const { id, name, completed }: TodoItem = props.todo;

    return (
        <li className="list-group-item">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={id} onChange={(param) => props.toggle(id)} checked={completed}></input>
                <label className="custom-control-label" htmlFor={id}>{name}</label>
            </div>
        </li>
    );
}