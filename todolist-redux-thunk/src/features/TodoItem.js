import { useDispatch } from 'react-redux';
import { fetchDelete, createEditTodo, toggleBackground} from '../store/actions/todoActions'

export default function TodoItem({todo}) {
    const dispatch = useDispatch()
    function onDeleteClick(e) {
        e.stopPropagation()
        dispatch(fetchDelete(todo))
    }

    function onEditBtnClisck(e) {
        e.stopPropagation()
        dispatch(createEditTodo(todo))
    }

    function onTodoClick(e) {
        e.stopPropagation()
        dispatch(toggleBackground(todo))
    }

    return (
        <li style = {{ background: todo.done ? 'green' : '' }} onClick = {onTodoClick}>
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