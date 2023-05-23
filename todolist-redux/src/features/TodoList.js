import TodoItem from './TodoItem'

export default function TodoList({list, onEditTodo}) {
    
    return (
        <ul id="todoList">
            {list.map(todo => (
            <TodoItem
            onEditTodo = {onEditTodo}
            key = {todo.id}
            todo = {todo}/>
            ))}
            
        </ul>
    )
}