export default function TodoItem({todo, onRemoveTodo, onEditTodo}) {
    
    function onDeleteClick() {
        onRemoveTodo(todo.id)
    }

    function onEditBtnClisck() {
        onEditTodo(todo)
    }

    return (
        <li>
            <span>{todo.title}</span>
            <button
            onClick={onDeleteClick}
            >Delete</button>
            <button
            onClick={onEditBtnClisck}
            >Edit</button>
        </li>
    )
}