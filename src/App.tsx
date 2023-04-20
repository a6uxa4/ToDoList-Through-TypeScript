import React, { useState } from 'react'

type Todo = {
	id: number
	title: string
	completed: boolean
}

const initialTodos: Todo[] = [
	{
		id: 1,
		title: 'Learn TypeScript',
		completed: false,
	},
	{
		id: 2,
		title: 'Build a Todo App',
		completed: false,
	},
]

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>(initialTodos)
	const [newTodo, setNewTodo] = useState<string>('')

	const handleNewTodoChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setNewTodo(event.target.value)
	}

	const handleNewTodoAdd = () => {
		const newId = todos.length + 1
		const newTodoItem = {
			id: newId,
			title: newTodo,
			completed: false,
		}
		setTodos([...todos, newTodoItem])
		setNewTodo('')
	}

	const handleTodoToggle = (todoId: number) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === todoId) {
				return { ...todo, completed: !todo.completed }
			}
			return todo
		})
		setTodos(updatedTodos)
	}

	return (
		<div>
			<h1>Todo List</h1>
			<div>
				<input
					type='text'
					value={newTodo}
					onChange={handleNewTodoChange}
				/>
				<button onClick={handleNewTodoAdd}>Add Todo</button>
			</div>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input
							type='checkbox'
							checked={todo.completed}
							onChange={() => handleTodoToggle(todo.id)}
						/>
						<span>{todo.title}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
