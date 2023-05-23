import TodoItem from './TodoItem'

    export default function TodoList({list}) {
    
    return (
        <ul id="todoList">
            {list.map(todo => (
            <TodoItem
            key = {todo.id}
            todo = {todo}/>
            ))}
            
        </ul>
    )
}