import React from 'react';
import TodoItemView from './TodoItemView';
import TodoItem from '../interfaces/TodoItem';

export default function TodoListView(props: {
    todos: TodoItem[];
    toggle: (id: string) => undefined;
}) {

    return (
        <div>

            <h2>My ToDo list:</h2>

            <ul>
                {props.todos.map((todo) => (
                    <TodoItemView key={todo.id} todo={todo} toggle={props.toggle} />
                ))}
            </ul>

        </div>
    );
}