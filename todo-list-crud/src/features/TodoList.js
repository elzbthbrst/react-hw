import TodoItem from './TodoItem'

export default function TodoList({list, onRemoveTodo, onEditTodo}) {
    
    return (
        <ul id="todoList">
            {list.map(todo => (
            <TodoItem
            onRemoveTodo = {onRemoveTodo}
            onEditTodo = {onEditTodo}
            key = {todo.id}
            todo = {todo}/>
            ))}
            
        </ul>
    )
}