import React, { useState, useRef, useEffect } from 'react';
import TodoListView from './TodoListView';
import TodoItem from '../interfaces/TodoItem';
import { v4 as uuid } from 'uuid';

export default function TodoManager() {

    const [todos, setTodos] = useState<TodoItem[]>([]);
    const todoNameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const cookie: string | null = localStorage.getItem('saved-todo-list');
        if (cookie === null) return;
        const storedTodos: TodoItem[] = JSON.parse(cookie);
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('saved-todo-list', JSON.stringify(todos));
    }, [todos]);

    function addTaskToList(): void {
        const name: string | null = todoNameRef.current ? todoNameRef.current.value : '';
        if (name === '') return;
        const todo: TodoItem = {
            id: uuid().trim(),
            name: name,
            completed: false
        };
        const newTodos: TodoItem[] = [...todos, todo];
        setTodos(newTodos);
        if (todoNameRef.current != null) todoNameRef.current.value = '';
    }

    function toggleComplededTask(id: string): undefined {
        const newTodos: TodoItem[] = [...todos];
        const todo: TodoItem | undefined = newTodos.find((todo) => todo.id === id);
        if (todo === undefined) return;
        todo.completed = !todo.completed;
        setTodos(newTodos);
        console.log(todo);
    }

    function clearCompletedTasks(): void {
        const newTodos: TodoItem[] = todos.filter((todo: TodoItem) => !todo.completed);
        setTodos(newTodos);
    }

    return (
        <div>

            <TodoListView todos={todos} toggle={toggleComplededTask} />

            <div>
                <input ref={todoNameRef} type="text" />
                <button onClick={addTaskToList}>Add task</button>
                <button onClick={clearCompletedTasks}>Clear</button>
            </div>

            <div>
                <p>You have {todos.filter((todo) => !todo.completed).length} tasks left.</p>
            </div>

        </div>
    );
}