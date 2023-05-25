import TodoItem from './TodoItem'
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../store/actions/todoActions';

export default function TodoList() {
    const list = useSelector((state) => state.list)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return (
        <ul id="todoList">
            {list.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo} />
            ))}

        </ul>
    )
}