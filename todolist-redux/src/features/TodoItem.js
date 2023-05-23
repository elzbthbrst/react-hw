import { useDispatch } from 'react-redux';
import { remove, createEditTodo} from '../store/actions'

export default function TodoItem({todo}) {
    const dispatch = useDispatch()
    function onDeleteClick() {
        dispatch(remove(todo.id))
    }

    function onEditBtnClisck() {
        dispatch(createEditTodo(todo))
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